import { SongDTO } from 'src/song/dto/song.dto';
import { IEndpoint } from 'src/common/interfaces/endpoint.interface';
import { SongService } from '../song.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SongSaver {
  constructor(private readonly songService: SongService) {}

  async saveSongList(songs: SongDTO[]): Promise<string[]> {
    const savedSongs = await this.songService.createSongs(songs);

    return savedSongs.map((song) => song.id);
  }
}
