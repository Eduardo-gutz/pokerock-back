import { GenreDTO } from './genre.dto';
import { TrackListDTO } from './trackList.dto';

export interface AlbumDTO {
  id?: string;
  name: string;
  relase: string;
  recorder: string;
  studio: string;
  producer: string;
  label: string;
  length: number;
  genres: GenreDTO[];
  track_list: TrackListDTO[];
  bref: string;
}
