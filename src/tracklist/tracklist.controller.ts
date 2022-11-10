import {
  Controller,
  // Get,
  Post,
  Body,
  Res,
  HttpStatus,
  // Patch,
  // Param,
  // Delete,
} from '@nestjs/common';
import { AlbumService } from 'src/album/album.service';
import { SongSaver } from 'src/song/helpers/saveSong';
import { TrackListDTO } from './dto/trackList.dto';
import { TracklistService } from './tracklist.service';

@Controller('tracklist')
export class TracklistController {
  constructor(
    private readonly tracklistService: TracklistService,
    private readonly songHelper: SongSaver,
    private readonly albumservice: AlbumService,
  ) {}

  @Post()
  async create(@Body() tracklistDto: TrackListDTO, @Res() res: any) {
    if (!tracklistDto.albumId || tracklistDto.albumId === '') {
      return res.status(HttpStatus.BAD_REQUEST).json({
        error: 'bad request',
        messgae: 'The albumid Property is required to save a tracklist',
      });
    }

    const songs = await this.songHelper.saveSongList(tracklistDto.songs);

    const tlSaved = await this.tracklistService.createTracklist({
      ...tracklistDto,
      songs,
    });

    await this.albumservice.addTracklistToAlbum(
      tracklistDto.albumId,
      tlSaved.id,
    );

    return res.status(HttpStatus.OK).json(tlSaved);
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
