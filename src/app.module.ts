import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BandModule } from './band/band.module';
import { GenderController } from './gender/gender.controller';
import { GenderService } from './services/gender.service';
import { GenderModule } from './gender/gender.module';
import { ArtistService } from './services/artist/artist.service';
import { SongService } from './services/song/song.service';
import { TracklistService } from './services/tracklist/tracklist.service';
import { AlbumService } from './services/album/album.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    BandModule,
    GenderModule,
    MongooseModule.forRoot('mongodb://localhost/bands'),
  ],
  controllers: [AppController, GenderController],
  providers: [
    AppService,
    GenderService,
    ArtistService,
    SongService,
    TracklistService,
    AlbumService,
  ],
})
export class AppModule {}
