import { Injectable, NotFoundException } from '@nestjs/common';
import { IBand, IBandDoc } from './interfaces/Band.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BandService {
  constructor(@InjectModel('Band') private bandModel: Model<IBandDoc>) {}

  async createBand(newBand: IBand): Promise<IBandDoc> {
    const band = new this.bandModel(newBand);
    return await band.save();
  }

  async readBands(): Promise<IBandDoc[]> {
    return await this.bandModel.find();
  }

  async readBandById(id: string): Promise<IBandDoc | null> {
    return await this.bandModel.findById(id);
  }

  async updateBandAlbums(id: string, albumId: string) {
    const band = await this.bandModel.findById(id);
    if (!band) {
      throw new NotFoundException();
    }

    band.discography = [...band.discography, albumId];
    band.save();

    return band;
  }
}
