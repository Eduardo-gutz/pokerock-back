import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IArtist, IArtistDoc } from 'src/artist/entities/artist.interface';
import { ArtistDTO } from './dto/artist.dto';

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

  async readAllArtists() {
    if (!this.artists) await this.readAllArtist();

    return this.artists ?? [];
  }

  async readArtist(id: string): Promise<IArtistDoc | null> {
    return await this.artistModel.findById(id);
  }

  async updateArtist(id: string, data: Partial<ArtistDTO>) {
    const post = await this.artistModel.findByIdAndUpdate({ _id: id }, data, {
      new: true,
    });
    if (!post) {
      throw new NotFoundException();
    }
    return post;
  }

  async updateArtistAlbums(id: string, albumId: string) {
    const artist = await this.artistModel.findById(id);
    if (!artist) {
      throw new NotFoundException();
    }

    artist.discography = [...artist.discography, albumId];
    artist.save();

    return artist;
  }

  async patchBandsArtist(id: string, bandId: string) {
    const artist = await this.artistModel.findById(id);

    if (artist) {
      artist.othersBands = [...(artist.othersBands ?? []), bandId];
      artist.save();
    } else {
      throw new NotFoundException();
    }
    return artist;
  }
}
