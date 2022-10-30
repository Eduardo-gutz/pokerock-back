import { Injectable } from '@nestjs/common';
import { IArtist } from 'src/band/interfaces/artist.interface';

@Injectable()
export class ArtistService {
  private artists: IArtist[] = [];

  saveArtist(artist: IArtist) {
    const newArtist = {
      ...artist,
      id: this.artists.length + 1,
    };

    this.artists.push(newArtist);

    return newArtist;
  }
}
