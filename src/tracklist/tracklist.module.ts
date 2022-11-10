import { Module } from '@nestjs/common';
import { TracklistService } from './tracklist.service';
import { TracklistController } from './tracklist.controller';
import { SongModule } from 'src/song/song.module';
import { TracklistSaver } from './helpers/tracklistSaver';
import { MongooseModule } from '@nestjs/mongoose';
import { TracklistSchema } from './schema/tracklist.schema';
import { AlbumModule } from 'src/album/album.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Tracklist', schema: TracklistSchema }]),
    SongModule,
    AlbumModule,
  ],
  controllers: [TracklistController],
  providers: [TracklistService, TracklistSaver],
  exports: [TracklistService, TracklistSaver],
})
export class TracklistModule {}
