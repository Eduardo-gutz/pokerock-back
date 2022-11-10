import { Document } from 'mongoose';
import { TrackListDTO } from '../dto/trackList.dto';

export interface ITrackList extends Omit<TrackListDTO, 'songs'> {
  songs: string[];
}

export interface ITrackListDoc extends Omit<ITrackList, 'id'>, Document {}
