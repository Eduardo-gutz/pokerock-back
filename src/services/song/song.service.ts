import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SongDTO } from 'src/band/dto/song.dto';
import { ISong } from 'src/band/interfaces/song.interface';

@Injectable()
export class SongService {
  constructor(@InjectModel('Song') private songModel: Model<ISong>) {}

  async createSong(song: SongDTO) {
    const newSong = new this.songModel(song);
    return await newSong.save();
  }
}
