import {
  Controller,
  // Get,
  Post,
  Body,
  // Patch,
  // Param,
  // Delete,
} from '@nestjs/common';
import { SongSaver } from 'src/song/helpers/saveSong';
import { TrackListDTO } from './dto/trackList.dto';
import { TracklistService } from './tracklist.service';

@Controller('tracklist')
export class TracklistController {
  constructor(
    private readonly tracklistService: TracklistService,
    private readonly songHelper: SongSaver,
  ) {}

  @Post()
  async create(@Body() tracklistDto: TrackListDTO) {
    const songs = await this.songHelper.saveSongList(tracklistDto.songs);

    return this.tracklistService.createTracklist({
      ...tracklistDto,
      songs,
    });
  }

  // @Get()
  // findAll() {
  //   return this.tracklistService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.tracklistService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTracklistDto: UpdateTracklistDto) {
  //   return this.tracklistService.update(+id, updateTracklistDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.tracklistService.remove(+id);
  // }
}
