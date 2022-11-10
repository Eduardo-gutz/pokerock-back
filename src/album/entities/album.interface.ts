import { Document } from 'mongoose';
import { AlbumDTO } from 'src/album/dto/album.dto';

export interface IAlbum extends Omit<AlbumDTO, 'genres' | 'track_list'> {
  genres: string[];
  track_list: string[];
}

export interface IAlbumDoc extends Omit<IAlbum, 'id'>, Document {}
