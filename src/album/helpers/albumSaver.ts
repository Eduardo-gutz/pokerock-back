import { Injectable } from '@nestjs/common';
import { GenresSaver } from 'src/genres/helpers/genresSaver';
import { TracklistSaver } from 'src/tracklist/helpers/tracklistSaver';
import { AlbumService } from '../album.service';
import { AlbumDTO } from '../dto/album.dto';

@Injectable()
export class AlbumSaver {
  constructor(
    private readonly albumService: AlbumService,
    private readonly tlHelper: TracklistSaver,
    private readonly genreHelper: GenresSaver,
  ) {}
  async saveDiscography(discography: AlbumDTO[]): Promise<string[]> {
    const savedAlbums = discography.map(async (album) => {
      const track_list = await this.tlHelper.saveTracklist(album.track_list);
      const genres = await this.genreHelper.saveGenres(album.genres);

      return {
        ...album,
        track_list,
        genres,
      };
    });

    const albums = await Promise.all(savedAlbums);

    const savedAlbum = await this.albumService.createAlbums(albums);

    return savedAlbum.map((album) => album.id);
  }
}
