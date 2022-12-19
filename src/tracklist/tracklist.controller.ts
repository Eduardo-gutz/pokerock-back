import {
  Controller,
  // Get,
  Post,
  Body,
  Res,
  HttpStatus,
  UseGuards,
  // Patch,
  // Param,
  // Delete,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { SongDTO } from 'src/song/dto/song.dto';
import { SongSaver } from 'src/song/helpers/saveSong';
import { SongService } from 'src/song/song.service';
import { TracklistService } from './tracklist.service';

@Controller('tracklist')
export class TracklistController {
  constructor(
    private readonly tracklistService: TracklistService,
    private readonly songHelper: SongSaver,
    private readonly songService: SongService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post('/song')
  async createSong(@Body() createSongDto: SongDTO, @Res() res: any) {
    if (!createSongDto.tracklistId || createSongDto.tracklistId === '') {
      return res.status(HttpStatus.BAD_REQUEST).json({
        error: 'bad request',
        messgae: 'The tracklistId Property is required to save a song',
      });
    }

    const songSaved = await this.songService.createSong(createSongDto);

    await this.tracklistService.addSongToTracklist(
      createSongDto.tracklistId,
      songSaved.id,
    );

    return res.status(HttpStatus.OK).json(songSaved);
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
