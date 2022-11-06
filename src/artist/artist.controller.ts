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
} from '@nestjs/common';
import { AlbumSaver } from 'src/album/helpers/albumSaver';
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

  @Post()
  async create(@Body() createArtistDto: ArtistDTO) {
    const discography = await this.albumHelper.saveDiscography(
      createArtistDto.discography,
    );

    const artist = {
      ...createArtistDto,
      discography,
      mainBand: null,
      othersBands: [],
    };

    return this.artistService.createArtist(artist);
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
