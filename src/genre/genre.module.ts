import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GenreSchema } from 'src/band/schema/genre.schema';
import { GenreService } from 'src/services/genre/genre.service';
import { GenreController } from './genre.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Genre', schema: GenreSchema }]),
  ],
  providers: [GenreService],
  controllers: [GenreController],
})
export class GenreModule {}
