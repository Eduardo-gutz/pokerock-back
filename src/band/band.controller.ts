import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
  Get,
  Param,
} from '@nestjs/common';
import { IEndpoint } from 'src/common/interfaces/endpoint.interface';
import { AlbumService } from 'src/services/album/album.service';
import { ArtistService } from 'src/services/artist/artist.service';
import { GenderService } from 'src/services/gender.service';
import { SongService } from 'src/services/song/song.service';
import { TracklistService } from 'src/services/tracklist/tracklist.service';
import { BandService } from '../services/band.service';
import { AlbumDTO } from './dto/album.dto';
import { ArtistDTO } from './dto/artist.dto';
import { BandDTO } from './dto/band.dto';
import { GenderDTO } from './dto/gender.dto';
import { SongDTO } from './dto/song.dto';
import { TrackListDTO } from './dto/trackList.dto';
import { IAlbum } from './interfaces/album.interface';
import { IArtist } from './interfaces/artist.interface';
import { IBand } from './interfaces/Band.interface';
import { ITrackList } from './interfaces/tracklist.interface';

@Controller('band')
export class BandController {
  constructor(
    private service: BandService,
    private genderService: GenderService,
    private artistService: ArtistService,
    private songService: SongService,
    private tracklistService: TracklistService,
    private albumService: AlbumService,
  ) {}

  private async saveSong(songs: SongDTO[]): Promise<IEndpoint[]> {
    const savedSongs = songs.map(async (song) => {
      if (song.id) {
        return {
          id: song.id,
          name: song.name,
          endpoint: `/song/${song.id}`,
        };
      }

      const savedSong = await this.songService.saveSong(song);

      return {
        id: savedSong.id,
        name: savedSong.name,
        endpoint: `/song/${savedSong.id}`,
      };
    });

    return await Promise.all(savedSongs);
  }

  private async saveTracklist(trackList: TrackListDTO[]): Promise<IEndpoint[]> {
    const tlSaved = trackList.map(async (tl) => {
      if (tl.id) {
        return {
          id: tl.id,
          name: tl.version,
          endpoint: `/trackList/${tl.id}`,
        };
      }

      const songs = await this.saveSong(tl.songs);

      const tlToSave: ITrackList = {
        ...tl,
        songs,
      };

      const savedTL = await this.tracklistService.saveTracklist(tlToSave);

      return {
        id: savedTL.id,
        name: savedTL.version,
        endpoint: `/song/${savedTL.id}`,
      };
    });

    return await Promise.all(tlSaved);
  }

  private async saveDiscography(discography: AlbumDTO[]): Promise<IEndpoint[]> {
    const savedAlbums = discography.map(async (album) => {
      if (album.id) {
        return {
          id: album.id,
          name: album.name,
          endpoint: `/album/${album.id}`,
        };
      }

      const track_list = await this.saveTracklist(album.track_list);
      const genders = await this.saveGenders(album.genders);

      const albumToSave: IAlbum = {
        ...album,
        track_list,
        genders,
      };

      const savedAlbum = this.albumService.saveAlbum(albumToSave);

      return {
        id: savedAlbum.id,
        name: savedAlbum.name,
        endpoint: `/album/${savedAlbum.id}`,
      };
    });
    return await Promise.all(savedAlbums);
  }

  private async saveMembers(members: ArtistDTO[]) {
    const savedMembers = members.map(async (member) => {
      if (member.id) {
        return {
          id: member.id,
          name: member.name,
          endpoint: `/artist/${member.id}`,
        };
      }

      const discography = await this.saveDiscography(member.discography);

      const memberToSave: IArtist = {
        ...member,
        discography,
        mainBand: null,
        othersBands: [],
      };

      const artistSaved = await this.artistService.saveArtist(memberToSave);
      return {
        id: artistSaved.id,
        name: artistSaved.name,
        endpoint: `/artist/${artistSaved.id}`,
      };
    });

    return await Promise.all(savedMembers);
  }

  private async saveGenders(genders: GenderDTO[]) {
    const savedGenders = genders.map(async (gender) => {
      if (gender.id) {
        return {
          id: gender.id,
          name: gender.name,
          endpoint: `/gender/${gender.id}`,
        };
      }
      const genderSaved = await this.genderService.saveNewGender(gender);
      return {
        id: genderSaved.id,
        name: genderSaved.name,
        endpoint: `/gender/${genderSaved.id}`,
      };
    });

    return await Promise.all(savedGenders);
  }

  @Post()
  async postNewBand(@Res() res: any, @Body() newBand: BandDTO) {
    const genders = await this.saveGenders(newBand.genders);
    const members = await this.saveMembers(newBand.members);
    const pastMembers = await this.saveMembers(newBand.pastMembers);
    const discography = await this.saveDiscography(newBand.discography);

    const bandToSave: IBand = {
      ...newBand,
      genders,
      discography,
      members,
      pastMembers,
    };

    const bandSaved = await this.service.createBand(bandToSave);

    return res.status(HttpStatus.OK).json({
      messge: 'saved band',
      bandSaved,
    });
  }

  @Get()
  async getAllBands(@Res() res: any) {
    const bands = await this.service.readBands();

    return res.status(HttpStatus.OK).json({
      bands,
    });
  }

  @Get('/:id')
  async getBandById(@Res() res: any, @Param('id') id: string) {
    const band = await this.service.readBandById(id);

    return res.status(HttpStatus.OK).json(band);
  }
}
