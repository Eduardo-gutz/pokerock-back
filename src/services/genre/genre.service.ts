import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GenreDTO } from 'src/band/dto/genre.dto';
import { IGenreDoc } from 'src/band/interfaces/genre.interface';

@Injectable()
export class GenreService {
  constructor(@InjectModel('Genre') private genreModel: Model<IGenreDoc>) {}

  private genres: IGenreDoc[] | null = null;

  private async readAllGenres() {
    this.genres = await this.genreModel.find();
  }

  private async checkForGenre(genre: GenreDTO): Promise<IGenreDoc | undefined> {
    if (!this.genres) await this.readAllGenres();

    return this.genres?.find(
      (genreSaved) =>
        genreSaved.name.trim().toLowerCase() ===
        genre.name.trim().toLowerCase(),
    );
  }

  async createGenre(genre: GenreDTO): Promise<IGenreDoc> {
    const newGenre = new this.genreModel(genre);
    const genreSaved = await newGenre.save();

    this.genres?.push(genreSaved);
    return genreSaved;
  }

  async createGenres(genres: GenreDTO[]): Promise<IGenreDoc[]> {
    const savedGenres = genres.map(async (genre) => {
      const genreExist = await this.checkForGenre(genre);

      if (genreExist) return genreExist;

      return await this.createGenre(genre);
    });

    return await Promise.all(savedGenres);
  }
}
