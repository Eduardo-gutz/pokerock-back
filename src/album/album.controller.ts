import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Res,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { GenresSaver } from 'src/genres/helpers/genresSaver';
import { SongSaver } from 'src/song/helpers/saveSong';
import { TrackListDTO } from 'src/tracklist/dto/trackList.dto';
import { TracklistService } from 'src/tracklist/tracklist.service';
import { AlbumService } from './album.service';

@Controller('album')
export class AlbumController {
  constructor(
    private readonly albumService: AlbumService,
    // private readonly bandService: BandService,
    private readonly tlService: TracklistService,
    private readonly genreHelper: GenresSaver,
    private readonly songHelper: SongSaver,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() tracklistDto: TrackListDTO, @Res() res: any) {
    if (!tracklistDto.albumId || tracklistDto.albumId === '') {
      return res.status(HttpStatus.BAD_REQUEST).json({
        error: 'bad request',
        messgae: 'The albumid Property is required to save a tracklist',
      });
    }

    const songs = await this.songHelper.saveSongList(tracklistDto.songs);

    const tlSaved = await this.tlService.createTracklist({
      ...tracklistDto,
      songs,
    });

    await this.albumService.addTracklistToAlbum(
      tracklistDto.albumId,
      tlSaved.id,
    );

    return res.status(HttpStatus.OK).json(tlSaved);
  }

  @Get()
  async findAll(@Res() res: any) {
    const albums = await this.albumService.readAlbums();

    return res.status(HttpStatus.OK).json(
      albums.map((album) => ({
        id: album.id,
        name: album.name,
        endpoint: `/album/${album.id}`,
      })),
    );
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: any) {
    const album = await this.albumService.readAlbumById(id);

    return res
      .status(HttpStatus.OK)
      .json(album ?? { error: 'Not Found', message: 'Album not found' });
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAlbumDto: UpdateAlbumDto) {
  //   return this.albumService.update(+id, updateAlbumDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.albumService.remove(+id);
  // }
}
