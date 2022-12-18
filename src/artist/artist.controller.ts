import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  // Delete,
  Res,
  HttpStatus,
  Param,
  UseGuards,
} from '@nestjs/common';
import { AlbumDTO } from 'src/album/dto/album.dto';
import { AlbumSaver } from 'src/album/helpers/albumSaver';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ArtistService } from './artist.service';
import { ArtistDTO } from './dto/artist.dto';

@Controller('artist')
export class ArtistController {
  constructor(
    private readonly artistService: ArtistService,
    private readonly albumHelper: AlbumSaver,
  ) {}

  @Get()
  async getAllArtist(@Res() res: any) {
    const artists = await this.artistService.readAllArtists();

    return res.status(HttpStatus.OK).json(
      artists.map((artist) => ({
        id: artist.id,
        name: artist.name,
        endpoint: `/artist/${artist.id}`,
      })),
    );
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: any) {
    const artist = await this.artistService.readArtist(id);

    return res
      .status(HttpStatus.OK)
      .json(artist ?? { error: 'Not Found', message: 'Artist not found' });
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async updateArtist(
    @Param('id') id: string,
    @Res() res: any,
    @Body() artistDto: Partial<ArtistDTO>,
  ) {
    const artist = await this.artistService.updateArtist(id, artistDto);

    return res
      .status(HttpStatus.OK)
      .json(artist ?? { error: 'Not Found', message: 'Artist not found' });
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createArtistDto: ArtistDTO) {
    const discography = await this.albumHelper.saveDiscography(
      createArtistDto.discography,
    );

    const artist = {
      ...createArtistDto,
      discography,
    };

    return this.artistService.createArtist(artist);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/album')
  async createAlbum(@Body() albumDto: AlbumDTO, @Res() res: any) {
    if (!albumDto.artists || albumDto.artists.length < 1) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        error: 'bad request',
        messgae: 'The artist Property is requires to save a album',
      });
    }

    const albumSaved = await this.albumHelper.saveDiscography([albumDto]);

    if (albumDto.artists) {
      albumDto.artists.forEach(async (artist) => {
        await this.artistService.updateArtistAlbums(artist, albumSaved[0]);
      });
    }

    return res.status(HttpStatus.OK).json(albumDto);
  }
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateArtistDto: ArtistDto) {
  //   return this.artistService.update(+id, updateArtistDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.artistService.remove(+id);
  // }
}
