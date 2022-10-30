import { Injectable } from '@nestjs/common';
import { IAlbum } from 'src/band/interfaces/album.interface';

@Injectable()
export class AlbumService {
  private albums: IAlbum[] = [];

  saveAlbum(album: IAlbum) {
    const newAlbum = {
      ...album,
      id: this.albums.length + 1,
    };

    this.albums.push(newAlbum);

    return newAlbum;
  }
}
