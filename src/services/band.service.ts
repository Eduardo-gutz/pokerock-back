import { Injectable } from '@nestjs/common';
import { IBand, IBandDoc } from '../band/interfaces/Band.interface';
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
}
