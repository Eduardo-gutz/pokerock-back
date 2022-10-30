import { AlbumDTO } from './album.dto';
import { BandDTO } from './band.dto';
import { TimelineDTO } from './timeline.dto';

export interface ArtistDTO {
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
  mainBand: BandDTO | null;
  othersBands: BandDTO[];
  timeline: TimelineDTO[];
  discography: AlbumDTO[];
}
