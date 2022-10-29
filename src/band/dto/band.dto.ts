import { AlbumDTO } from './album.dto';

export interface BandDTO {
  name: string;
  summary: string;
  origin: string;
  startTemp: number;
  endTemp: number;
  toPresent: boolean;
  discography: AlbumDTO[];
}
