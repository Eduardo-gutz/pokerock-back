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

  private trackList: ITrackListDoc[] | null = null;

  private async readAllTrackLists() {
    this.trackList = await this.tracklistModel.find();
  }

  private async checkForTL(tl: ITrackList): Promise<ITrackListDoc | undefined> {
    if (!this.trackList) await this.readAllTrackLists();

    return this.trackList?.find(
      (tlSaved) =>
        tlSaved.version.trim().toLowerCase() ===
        tl.version.trim().toLowerCase(),
    );
  }

  async createTracklist(trackList: ITrackList) {
    const newTracklist = new this.tracklistModel(trackList);
    const tlSaved = await newTracklist.save();

    this.trackList?.push(tlSaved);
    return tlSaved;
  }

  async createTracklists(tracklists: ITrackList[]): Promise<ITrackListDoc[]> {
    const savedTracklists = tracklists.map(async (tl) => {
      const tlExist = await this.checkForTL(tl);

      if (tlExist) return tlExist;

      return await this.createTracklist(tl);
    });

    return await Promise.all(savedTracklists);
  }
}
