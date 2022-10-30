import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AlbumService } from 'src/services/album/album.service';
import { ArtistService } from 'src/services/artist/artist.service';
import { GenderService } from 'src/services/gender.service';
import { SongService } from 'src/services/song/song.service';
import { TracklistService } from 'src/services/tracklist/tracklist.service';
import { BandService } from '../services/band.service';
import { BandController } from './band.controller';
import { BandSchema } from './schema/band.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Band', schema: BandSchema }])],
  providers: [
    BandService,
    GenderService,
    ArtistService,
    SongService,
    TracklistService,
    AlbumService,
  ],
  controllers: [BandController],
})
export class BandModule {}
