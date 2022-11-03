import { Module } from '@nestjs/common';
import { ArtistService } from './artist.service';
import { ArtistController } from './artist.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ArtistSchema } from './schema/artist.schema';
import { AlbumModule } from 'src/album/album.module';
import { ArtistSaver } from './helpers/artistsSaver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Artist', schema: ArtistSchema }]),
    AlbumModule,
  ],
  controllers: [ArtistController],
  providers: [ArtistService, ArtistSaver],
  exports: [ArtistService, ArtistSaver],
})
export class ArtistModule {}
