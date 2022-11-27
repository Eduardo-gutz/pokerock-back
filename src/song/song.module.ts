import { Module } from '@nestjs/common';
import { SongService } from './song.service';
import { SongController } from './song.controller';
import { SongSaver } from './helpers/saveSong';
import { MongooseModule } from '@nestjs/mongoose';
import { SongSchema } from './schema/song.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Song', schema: SongSchema }])],
  controllers: [SongController],
  providers: [SongService, SongSaver],
  exports: [SongSaver, SongService],
})
export class SongModule {}
