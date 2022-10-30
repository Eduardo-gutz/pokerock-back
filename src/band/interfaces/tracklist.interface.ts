import { IEndpoint } from 'src/common/interfaces/endpoint.interface';
import { TrackListDTO } from '../dto/trackList.dto';

export interface ITrackList extends Omit<TrackListDTO, 'songs'> {
  songs: IEndpoint[];
}
