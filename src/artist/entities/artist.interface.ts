import { Document } from 'mongoose';
import { TimelineDTO } from '../../band/dto/timeline.dto';

export interface IArtist {
  id?: number;
  name: string;
  artistName: string;
  birthDate: number;
  deathDate: number;
  causeDeath: string;
  startTemp: number;
  endTemp: number;
  instruments: string[];
  roles: string[];
  mainBand?: string | null;
  othersBands?: string[];
  timeline: TimelineDTO[];
  discography: string[];
}

export interface IArtistDoc extends Omit<IArtist, 'id'>, Document {}
