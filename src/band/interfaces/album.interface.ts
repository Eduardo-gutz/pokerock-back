import { Document } from 'mongoose';
import { AlbumDTO } from 'src/band/dto/album.dto';
import { IEndpoint } from 'src/common/interfaces/endpoint.interface';

export interface IAlbum extends Omit<AlbumDTO, 'genders' | 'track_list'> {
  genders: IEndpoint[];
  track_list: IEndpoint[];
}

export interface IAlbumDoc extends Omit<IAlbum, 'id'>, Document {}
