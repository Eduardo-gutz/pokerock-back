import { Module } from '@nestjs/common';
import { SongService } from './song.service';
import { SongController } from './song.controller';
import { SongSaver } from './helpers/saveSong';
import { MongooseModule } from '@nestjs/mongoose';
import { SongSchema } from './schema/song.schema';
import { TracklistService } from 'src/tracklist/tracklist.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Song', schema: SongSchema }]),
    TracklistService,
  ],
  controllers: [SongController],
  providers: [SongService, SongSaver],
  exports: [SongSaver, SongService],
})
export class SongModule {}
