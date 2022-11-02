import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IAlbum, IAlbumDoc } from 'src/band/interfaces/album.interface';

@Injectable()
export class AlbumService {
  constructor(@InjectModel('Album') private albumModel: Model<IAlbumDoc>) {}

  async createAlbum(album: IAlbum) {
    const newAlbum = new this.albumModel(album);
    return await newAlbum.save();
  }
}
