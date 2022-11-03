import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SongDTO } from 'src/song/dto/song.dto';
import { ISong } from 'src/song/entities/song.interface';

@Injectable()
export class SongService {
  constructor(@InjectModel('Song') private songModel: Model<ISong>) {}

  private songs: ISong[] | null = null;

  private async readAllSongs() {
    this.songs = await this.songModel.find();
  }

  private async checkForSong(song: SongDTO): Promise<ISong | undefined> {
    if (!this.songs) await this.readAllSongs();

    return this.songs?.find(
      (songSaved) =>
        songSaved.name.trim().toLowerCase() === song.name.trim().toLowerCase(),
    );
  }

  async createSong(song: SongDTO) {
    const newSong = new this.songModel(song);
    const songSaved = await newSong.save();

    this.songs?.push(songSaved);
    return songSaved;
  }

  async createSongs(songs: SongDTO[]): Promise<ISong[]> {
    const savedSongs = songs.map(async (song) => {
      const songExist = await this.checkForSong(song);

      if (songExist) return songExist;

      return await this.createSong(song);
    });

    return await Promise.all(savedSongs);
  }
}
