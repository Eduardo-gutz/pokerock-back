import {
  Controller,
  // Get,
  Post,
  Body,
  // Patch,
  // Param,
  // Delete,
} from '@nestjs/common';
import { GenresSaver } from 'src/genres/helpers/genresSaver';
import { TracklistSaver } from 'src/tracklist/helpers/tracklistSaver';
import { AlbumService } from './album.service';
import { AlbumDTO } from './dto/album.dto';

@Controller('album')
export class AlbumController {
  constructor(
    private readonly albumService: AlbumService,
    private readonly tlHelper: TracklistSaver,
    private readonly genreHelper: GenresSaver,
  ) {}

  @Post()
  async create(@Body() albumDto: AlbumDTO) {
    const track_list = await this.tlHelper.saveTracklist(albumDto.track_list);
    const genres = await this.genreHelper.saveGenres(albumDto.genres);

    return this.albumService.createAlbum({
      ...albumDto,
      track_list,
      genres,
    });
  }

  // @Get()
  // findAll() {
  //   return this.albumService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.albumService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAlbumDto: UpdateAlbumDto) {
  //   return this.albumService.update(+id, updateAlbumDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.albumService.remove(+id);
  // }
}
