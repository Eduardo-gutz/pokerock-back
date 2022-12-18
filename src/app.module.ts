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
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    BandModule,
    GenresModule,
    MongooseModule.forRoot(process.env.MONGO ?? ''),
    ArtistModule,
    SongModule,
    AlbumModule,
    TracklistModule,
    GenresModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController, GenresController],
  providers: [AppService],
})
export class AppModule {}
