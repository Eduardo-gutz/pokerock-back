import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
  Get,
  Param,
  UseGuards,
} from '@nestjs/common';
import { BandService } from './band.service';
import { BandDTO } from './dto/band.dto';
import { IBand } from './interfaces/Band.interface';
import { GenresSaver } from 'src/genres/helpers/genresSaver';
import { ArtistSaver } from 'src/artist/helpers/artistsSaver';
import { AlbumSaver } from 'src/album/helpers/albumSaver';
import { ArtistService } from 'src/artist/artist.service';
import { AlbumService } from 'src/album/album.service';
import { AlbumDTO } from 'src/album/dto/album.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('band')
export class BandController {
  constructor(
    private service: BandService,
    private genreHelper: GenresSaver,
    private artistHelper: ArtistSaver,
    private albumHelper: AlbumSaver,
    private artistService: ArtistService,
    private albumService: AlbumService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async postNewBand(@Res() res: any, @Body() newBand: BandDTO) {
    const genres = await this.genreHelper.saveGenres(newBand.genres);
    const members = await this.artistHelper.saveMembers(newBand.members);
    const pastMembers = await this.artistHelper.saveMembers(
      newBand.pastMembers,
    );
    const discography = await this.albumHelper.saveDiscography(
      newBand.discography,
    );

    const bandToSave: IBand = {
      ...newBand,
      genres,
      discography,
      members,
      pastMembers,
    };

    const bandSaved = await this.service.createBand(bandToSave);

    members.forEach((member) => {
      this.artistService.updateArtist(member, {
        mainBand: bandSaved._id,
      });
    });

    pastMembers.forEach((member) => {
      this.artistService.patchBandsArtist(member, bandSaved._id);
    });

    discography.forEach((album) => {
      this.albumService.updateAlbum(album, { band: bandSaved._id });
    });

    return res.status(HttpStatus.OK).json({
      messge: 'saved band',
      bandSaved,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Post('/album')
  async create(@Body() albumDto: AlbumDTO, @Res() res: any) {
    if (!albumDto.band && albumDto.band === '') {
      return res.status(HttpStatus.BAD_REQUEST).json({
        error: 'bad request',
        messgae: 'The band Property is requires to save a alubum',
      });
    }

    const albumSaved = await this.albumHelper.saveDiscography([albumDto]);

    if (albumDto.band) {
      await this.service.updateBandAlbums(albumDto.band, albumSaved[0]);
    }

    return res.status(HttpStatus.OK).json(albumDto);
  }

  @Get()
  async getAllBands(@Res() res: any) {
    const bands = await this.service.readBands();

    return res.status(HttpStatus.OK).json(
      bands.map((band) => ({
        id: band.id,
        name: band.name,
        endpoint: `/band/${band.id}`,
      })),
    );
  }

  @Get('/:id')
  async getBandById(@Res() res: any, @Param('id') id: string) {
    const band = await this.service.readBandById(id);

    return res.status(HttpStatus.OK).json(band);
  }
}
