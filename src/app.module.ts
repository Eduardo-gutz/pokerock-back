import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BandModule } from './band/band.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ArtistModule } from './artist/artist.module';
import { SongModule } from './song/song.module';
import { AlbumModule } from './album/album.module';
import { TracklistModule } from './tracklist/tracklist.module';
import { GenresModule } from './genres/genres.module';
import { GenresController } from './genres/genres.controller';

@Module({
  imports: [
    BandModule,
    GenresModule,
    MongooseModule.forRoot(
      'mongodb+srv://lalogutzfl19:MYuppKDpjYzwgHxH@cluster0.xrbheqq.mongodb.net/?retryWrites=true&w=majority',
    ),
    ArtistModule,
    SongModule,
    AlbumModule,
    TracklistModule,
    GenresModule,
  ],
  controllers: [AppController, GenresController],
  providers: [AppService],
})
export class AppModule {}
