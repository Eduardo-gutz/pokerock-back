import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IAlbum, IAlbumDoc } from 'src/album/entities/album.interface';
import { AlbumDTO } from './dto/album.dto';

@Injectable()
export class AlbumService {
  constructor(@InjectModel('Album') private albumModel: Model<IAlbumDoc>) {}

  private albums: IAlbumDoc[] | null = null;

  private async readAllAlbums() {
    this.albums = await this.albumModel.find();
  }

  private async checkForAlbum(album: IAlbum): Promise<IAlbumDoc | undefined> {
    if (!this.albums) await this.readAllAlbums();

    return this.albums?.find(
      (albumSaved) =>
        albumSaved.name.trim().toLowerCase() ===
        album.name.trim().toLowerCase(),
    );
  }

  async createAlbum(album: IAlbum) {
    const newAlbum = new this.albumModel(album);
    const albumSaved = await newAlbum.save();

    this.albums?.push(albumSaved);
    return albumSaved;
  }

  async createAlbums(albums: IAlbum[]): Promise<IAlbumDoc[]> {
    const savedArtists = albums.map(async (album) => {
      const artistExist = await this.checkForAlbum(album);

      if (artistExist) return artistExist;

      return await this.createAlbum(album);
    });

    return await Promise.all(savedArtists);
  }

  async readAlbums(): Promise<IAlbumDoc[]> {
    if (!this.albums) await this.readAllAlbums();

    return this.albums ?? [];
  }

  async readAlbumById(id: string): Promise<IAlbumDoc | null> {
    const album = await this.albumModel.findById(id);
    if (!album) {
      throw new NotFoundException();
    }
    return album;
  }

  async updateAlbum(id: string, data: Partial<AlbumDTO>) {
    const album = await this.albumModel.findByIdAndUpdate({ _id: id }, data, {
      new: true,
    });
    if (!album) {
      throw new NotFoundException();
    }
    return album;
  }

  async addTracklistToAlbum(id: string, tlid: string) {
    const album = await this.albumModel.findById(id);
    if (!album) {
      throw new NotFoundException();
    } else {
      album.track_list = [...album.track_list, tlid];
      album.save();

      return album;
    }
  }
}
