import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BandModule } from './band/band.module';
import { GenreController } from './genre/genre.controller';
import { GenreModule } from './genre/genre.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    BandModule,
    GenreModule,
    MongooseModule.forRoot('mongodb://localhost/bands'),
  ],
  controllers: [AppController, GenreController],
  providers: [AppService],
})
export class AppModule {}
