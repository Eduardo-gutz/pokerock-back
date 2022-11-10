import { Injectable } from '@nestjs/common';
import { GenreDTO } from '../dto/genre.dto';
import { GenreService } from '../genres.service';

@Injectable()
export class GenresSaver {
  constructor(private genreService: GenreService) {}

  async saveGenres(genres: GenreDTO[]): Promise<string[]> {
    const gendersSaved = await this.genreService.createGenres(genres);

    return gendersSaved.map((genre) => genre.id);
  }
}
