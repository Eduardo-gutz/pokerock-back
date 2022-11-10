import { GenreDTO } from '../../genres/dto/genre.dto';
import { TrackListDTO } from '../../tracklist/dto/trackList.dto';

export interface AlbumDTO {
  id?: string;
  band?: string;
  artists?: string[];
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
