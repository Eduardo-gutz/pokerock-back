import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IArtist, IArtistDoc } from 'src/artist/entities/artist.interface';

@Injectable()
export class ArtistService {
  constructor(@InjectModel('Artist') private artistModel: Model<IArtistDoc>) {}

  private artists: IArtistDoc[] | null = null;

  private async readAllArtist() {
    this.artists = await this.artistModel.find();
  }

  private async checkForArtist(
    artist: IArtist,
  ): Promise<IArtistDoc | undefined> {
    if (!this.artists) await this.readAllArtist();

    return this.artists?.find(
      (artistSaved) =>
        artistSaved.name.trim().toLowerCase() ===
        artist.name.trim().toLowerCase(),
    );
  }

  async createArtist(artist: IArtist) {
    const newArtist = new this.artistModel(artist);
    const artistSaved = await newArtist.save();

    this.artists?.push(artistSaved);
    return artistSaved;
  }

  async createArtists(artists: IArtist[]): Promise<IArtistDoc[]> {
    const savedArtists = artists.map(async (artist) => {
      const artistExist = await this.checkForArtist(artist);

      if (artistExist) return artistExist;

      return await this.createArtist(artist);
    });

    return await Promise.all(savedArtists);
  }
}
