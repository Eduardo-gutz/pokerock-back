import { Injectable } from '@nestjs/common';
import { SongDTO } from 'src/band/dto/song.dto';

@Injectable()
export class SongService {
  private songs: SongDTO[] = [];

  saveSong(song: SongDTO) {
    const newSong = {
      ...song,
      id: this.songs.length + 1,
    };

    this.songs.push(newSong);

    return newSong;
  }
}
