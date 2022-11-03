import { Injectable } from '@nestjs/common';
import { IEndpoint } from 'src/common/interfaces/endpoint.interface';
import { GenreDTO } from '../dto/genre.dto';
import { GenreService } from '../genres.service';

@Injectable()
export class GenresSaver {
  constructor(private genreService: GenreService) {}

  async saveGenres(genres: GenreDTO[]): Promise<IEndpoint[]> {
    const gendersSaved = await this.genreService.createGenres(genres);

    return gendersSaved.map((genre) => {
      return {
        id: genre.id,
        name: genre.name,
        endpoint: `/genre/${genre.id}`,
      };
    });
  }
}
