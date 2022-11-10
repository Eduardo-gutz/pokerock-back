import { SongDTO } from '../../song/dto/song.dto';

export interface TrackListDTO {
  id?: number;
  albumId?: string;
  version: string;
  songs: SongDTO[];
}
