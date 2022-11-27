import { Controller, Get, Res, HttpStatus, Param } from '@nestjs/common';
import { SongService } from './song.service';

@Controller('song')
export class SongController {
  constructor(private readonly songService: SongService) {}

  @Get()
  async findAll(@Res() res: any) {
    const songs = await this.songService.readASongs();

    return res.status(HttpStatus.OK).json(
      songs.map((song) => ({
        id: song.id,
        name: song.name,
        endpoint: `/song/${song.id}`,
      })),
    );
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: any) {
    const song = await this.songService.readSong(id);

    return res
      .status(HttpStatus.OK)
      .json(song ?? { error: 'Not Found', message: 'Song not found' });
  }
}
