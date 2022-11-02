import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AlbumService } from 'src/services/album/album.service';
import { ArtistService } from 'src/services/artist/artist.service';
import { GenreService } from 'src/services/genre/genre.service';
import { SongService } from 'src/services/song/song.service';
import { TracklistService } from 'src/services/tracklist/tracklist.service';
import { BandService } from '../services/band.service';
import { BandController } from './band.controller';
import { AlbumSchema } from './schema/album.schema';
import { ArtistSchema } from './schema/artist.schema';
import { BandSchema } from './schema/band.schema';
import { GenreSchema } from './schema/genre.schema';
import { SongSchema } from './schema/song.schema';
import { TracklistSchema } from './schema/tracklist.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Band', schema: BandSchema },
      { name: 'Song', schema: SongSchema },
      { name: 'Tracklist', schema: TracklistSchema },
      { name: 'Album', schema: AlbumSchema },
      { name: 'Artist', schema: ArtistSchema },
      { name: 'Genre', schema: GenreSchema },
    ]),
  ],
  providers: [
    BandService,
    GenreService,
    ArtistService,
    SongService,
    TracklistService,
    AlbumService,
  ],
  controllers: [BandController],
})
export class BandModule {}
