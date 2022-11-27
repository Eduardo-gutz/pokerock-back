import { Module } from '@nestjs/common';
import { AlbumService } from './album.service';
import { AlbumController } from './album.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TracklistModule } from 'src/tracklist/tracklist.module';
import { AlbumSchema } from './schema/album.schema';
import { AlbumSaver } from './helpers/albumSaver';
import { GenresModule } from 'src/genres/genres.module';
import { SongModule } from 'src/song/song.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Album', schema: AlbumSchema }]),
    TracklistModule,
    GenresModule,
    SongModule,
  ],
  controllers: [AlbumController],
  providers: [AlbumService, AlbumSaver],
  exports: [AlbumService, AlbumSaver],
})
export class AlbumModule {}
