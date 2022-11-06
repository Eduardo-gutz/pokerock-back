import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
  Get,
  Param,
} from '@nestjs/common';
import { BandService } from './band.service';
import { BandDTO } from './dto/band.dto';
import { IBand } from './interfaces/Band.interface';
import { GenresSaver } from 'src/genres/helpers/genresSaver';
import { ArtistSaver } from 'src/artist/helpers/artistsSaver';
import { AlbumSaver } from 'src/album/helpers/albumSaver';
import { ArtistService } from 'src/artist/artist.service';

@Controller('band')
export class BandController {
  constructor(
    private service: BandService,
    private genreHelper: GenresSaver,
    private artistHelper: ArtistSaver,
    private albumHelper: AlbumSaver,
    private artistService: ArtistService,
  ) {}

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

    const bandSavedEndpoint = {
      id: bandSaved.id,
      name: bandSaved.name,
      endpoint: `/band/${bandSaved.id}`,
    };

    members.forEach((member) => {
      this.artistService.updateArtist(member.id, {
        mainBand: bandSavedEndpoint,
      });
    });

    return res.status(HttpStatus.OK).json({
      messge: 'saved band',
      bandSaved,
    });
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
