import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IArtist, IArtistDoc } from 'src/band/interfaces/artist.interface';

@Injectable()
export class ArtistService {
  constructor(@InjectModel('Artist') private artistModel: Model<IArtistDoc>) {}

  async createArtist(artist: IArtist) {
    const newArtist = new this.artistModel(artist);
    return await newArtist.save();
  }
}
