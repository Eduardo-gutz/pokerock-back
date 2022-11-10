import {
  Controller,
  Get,
  // Post,
  // Body,
  // Patch,
  Param,
  Res,
  HttpStatus,
  // Delete,
} from '@nestjs/common';
// import { BandService } from 'src/band/band.service';
import { GenresSaver } from 'src/genres/helpers/genresSaver';
import { TracklistSaver } from 'src/tracklist/helpers/tracklistSaver';
import { AlbumService } from './album.service';
// import { AlbumDTO } from './dto/album.dto';

@Controller('album')
export class AlbumController {
  constructor(
    private readonly albumService: AlbumService,
    // private readonly bandService: BandService,
    private readonly tlHelper: TracklistSaver,
    private readonly genreHelper: GenresSaver,
  ) {}

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
