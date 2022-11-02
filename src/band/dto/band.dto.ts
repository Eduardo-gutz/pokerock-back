import { AlbumDTO } from './album.dto';
import { ArtistDTO } from './artist.dto';
import { GenreDTO } from './genre.dto';

export interface BandDTO {
  name: string;
  summary: string;
  origin: string;
  startTemp: number;
  endTemp: number;
  toPresent: boolean;
  genres: GenreDTO[];
  members: ArtistDTO[];
  pastMembers: ArtistDTO[];
  discography: AlbumDTO[];
}
