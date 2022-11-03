import { Document } from 'mongoose';
import { AlbumDTO } from 'src/album/dto/album.dto';
import { IEndpoint } from 'src/common/interfaces/endpoint.interface';

export interface IAlbum extends Omit<AlbumDTO, 'genres' | 'track_list'> {
  genres: IEndpoint[];
  track_list: IEndpoint[];
}

export interface IAlbumDoc extends Omit<IAlbum, 'id'>, Document {}
