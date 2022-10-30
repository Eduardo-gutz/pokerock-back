import { AlbumDTO } from './album.dto';
import { ArtistDTO } from './artist.dto';
import { GenderDTO } from './gender.dto';

export interface BandDTO {
  name: string;
  summary: string;
  origin: string;
  startTemp: number;
  endTemp: number;
  toPresent: boolean;
  genders: GenderDTO[];
  members: ArtistDTO[];
  pastMembers: ArtistDTO[];
  discography: AlbumDTO[];
}
