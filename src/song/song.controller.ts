import {
  Controller,
  Get,
  Post,
  Body,
  Res,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { TracklistService } from 'src/tracklist/tracklist.service';
import { SongDTO } from './dto/song.dto';
import { SongService } from './song.service';

@Controller('song')
export class SongController {
  constructor(
    private readonly songService: SongService,
    private readonly tracklisService: TracklistService,
  ) {}

  @Post()
  async create(@Body() createSongDto: SongDTO, @Res() res: any) {
    if (!createSongDto.tracklistId || createSongDto.tracklistId === '') {
      return res.status(HttpStatus.BAD_REQUEST).json({
        error: 'bad request',
        messgae: 'The tracklistId Property is required to save a song',
      });
    }

    const songSaved = await this.songService.createSong(createSongDto);

    await this.tracklisService.addSongToTracklist(
      createSongDto.tracklistId,
      songSaved.id,
    );

    return res.status(HttpStatus.OK).json(songSaved);
  }

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
