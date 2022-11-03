import {
  Controller,
  // Get,
  Post,
  Body,
  // Patch,
  // Param,
  // Delete,
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

  // @Get()
  // findAll() {
  //   return this.artistService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.artistService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateArtistDto: ArtistDto) {
  //   return this.artistService.update(+id, updateArtistDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.artistService.remove(+id);
  // }
}
