import { SongDTO } from '../../song/dto/song.dto';

export interface TrackListDTO {
  id?: number;
  albumId?: number;
  version: string;
  songs: SongDTO[];
}
