import { Injectable } from '@nestjs/common';
import { SongSaver } from 'src/song/helpers/saveSong';
import { TrackListDTO } from '../dto/trackList.dto';
import { TracklistService } from '../tracklist.service';

@Injectable()
export class TracklistSaver {
  constructor(
    private readonly tracklistService: TracklistService,
    private readonly songHelper: SongSaver,
  ) {}

  async saveTracklist(trackList: TrackListDTO[]): Promise<string[]> {
    const tlWithSongsSaved = trackList.map(async (tl) => {
      const songs = await this.songHelper.saveSongList(tl.songs);

      return {
        ...tl,
        songs,
      };
    });

    const tls = await Promise.all(tlWithSongsSaved);

    const tlSaved = await this.tracklistService.createTracklists(tls);

    return tlSaved.map((tl) => tl.id);
  }
}
