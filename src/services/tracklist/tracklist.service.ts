import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  ITrackList,
  ITrackListDoc,
} from 'src/band/interfaces/tracklist.interface';

@Injectable()
export class TracklistService {
  constructor(
    @InjectModel('Tracklist') private tracklistModel: Model<ITrackListDoc>,
  ) {}

  createTracklist(trackList: ITrackList) {
    const newTracklist = new this.tracklistModel(trackList);
    return newTracklist.save();
  }
}
