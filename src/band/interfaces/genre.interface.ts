import { GenreDTO } from '../dto/genre.dto';

export interface IGenreDoc extends Omit<GenreDTO, 'id'>, Document {
  id: any;
}
