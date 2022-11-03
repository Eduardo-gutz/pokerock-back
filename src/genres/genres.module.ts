import { Module } from '@nestjs/common';
import { GenreService } from './genres.service';
import { GenresController } from './genres.controller';
import { GenresSaver } from './helpers/genresSaver';
import { GenreSchema } from './schema/genre.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Genre', schema: GenreSchema }]),
  ],
  controllers: [GenresController],
  providers: [GenreService, GenresSaver],
  exports: [GenreService, GenresSaver],
})
export class GenresModule {}
