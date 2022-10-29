import { GenderDTO } from './gender.dto';
import { TrackListDTO } from './trackList.dto';

export interface AlbumDTO {
  name: string;
  relase: string;
  recorder: string;
  studio: string;
  producer: string;
  label: string;
  length: number;
  genders: GenderDTO;
  track_list: TrackListDTO[];
  bref: string;
}
