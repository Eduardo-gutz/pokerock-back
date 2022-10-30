import { Injectable } from '@nestjs/common';
import { ITrackList } from 'src/band/interfaces/tracklist.interface';

@Injectable()
export class TracklistService {
  private tracklist: ITrackList[] = [];

  saveTracklist(trackList: ITrackList) {
    const newTracklist = {
      ...trackList,
      id: this.tracklist.length + 1,
    };

    this.tracklist.push(newTracklist);

    return newTracklist;
  }
}
