import { IEndpoint } from 'src/common/interfaces/endpoint.interface';
import { TimelineDTO } from '../dto/timeline.dto';

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
  mainBand?: IEndpoint | null;
  othersBands?: IEndpoint[];
  timeline: TimelineDTO[];
  discography: IEndpoint[];
}
