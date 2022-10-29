import { SongDTO } from './song.dto';

export interface TrackListDTO {
  albumId?: number;
  version: string;
  songs: SongDTO[];
}
