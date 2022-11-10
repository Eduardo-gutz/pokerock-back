import { AlbumDTO } from '../../album/dto/album.dto';
import { TimelineDTO } from '../../band/dto/timeline.dto';

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
  mainBand: string | null;
  othersBands: string[];
  timeline: TimelineDTO[];
  discography: AlbumDTO[];
}
