import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BandService } from './band.service';
import { BandController } from './band.controller';
import { BandSchema } from './schema/band.schema';
import { ArtistModule } from 'src/artist/artist.module';
import { GenresModule } from 'src/genres/genres.module';
import { AlbumModule } from 'src/album/album.module';

@Module({
  imports: [
    ArtistModule,
    GenresModule,
    AlbumModule,
    MongooseModule.forFeature([{ name: 'Band', schema: BandSchema }]),
  ],
  controllers: [BandController],
  providers: [BandService],
  exports: [BandService],
})
export class BandModule {}
