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
import { GenreService } from 'src/services/genre/genre.service';
import { SongService } from 'src/services/song/song.service';
import { TracklistService } from 'src/services/tracklist/tracklist.service';
import { BandService } from '../services/band.service';
import { AlbumDTO } from './dto/album.dto';
import { ArtistDTO } from './dto/artist.dto';
import { BandDTO } from './dto/band.dto';
import { GenreDTO } from './dto/genre.dto';
import { SongDTO } from './dto/song.dto';
import { TrackListDTO } from './dto/trackList.dto';
import { IBand } from './interfaces/Band.interface';

@Controller('band')
export class BandController {
  constructor(
    private service: BandService,
    private genreService: GenreService,
    private artistService: ArtistService,
    private songService: SongService,
    private tracklistService: TracklistService,
    private albumService: AlbumService,
  ) {}

  private async saveSong(songs: SongDTO[]): Promise<IEndpoint[]> {
    const savedSongs = await this.songService.createSongs(songs);

    return savedSongs.map((song) => {
      return {
        id: song.id,
        name: song.name,
        endpoint: `/song/${song.id}`,
      };
    });
  }

  private async saveTracklist(trackList: TrackListDTO[]): Promise<IEndpoint[]> {
    const tlWithSongsSaved = trackList.map(async (tl) => {
      const songs = await this.saveSong(tl.songs);

      return {
        ...tl,
        songs,
      };
    });

    const tls = await Promise.all(tlWithSongsSaved);

    const tlSaved = await this.tracklistService.createTracklists(tls);

    return tlSaved.map((tl) => {
      return {
        id: tl.id,
        name: tl.version,
        endpoint: `/song/${tl.id}`,
      };
    });
  }

  private async saveDiscography(discography: AlbumDTO[]): Promise<IEndpoint[]> {
    const savedAlbums = discography.map(async (album) => {
      const track_list = await this.saveTracklist(album.track_list);
      const genres = await this.saveGenres(album.genres);

      return {
        ...album,
        track_list,
        genres,
      };
    });

    const albums = await Promise.all(savedAlbums);

    const savedAlbum = await this.albumService.createAlbums(albums);

    return savedAlbum.map((album) => {
      return {
        id: album.id,
        name: album.name,
        endpoint: `/album/${album.id}`,
      };
    });
  }

  private async saveMembers(members: ArtistDTO[]) {
    const savedMembers = members.map(async (member) => {
      const discography = await this.saveDiscography(member.discography);

      return {
        ...member,
        discography,
        mainBand: null,
        othersBands: [],
      };
    });

    const member = await Promise.all(savedMembers);

    const membersSaved = await this.artistService.createArtists(member);

    return membersSaved.map((artist) => {
      return {
        id: artist.id,
        name: artist.name,
        endpoint: `/artist/${artist.id}`,
      };
    });
  }

  private async saveGenres(genres: GenreDTO[]): Promise<IEndpoint[]> {
    const gendersSaved = await this.genreService.createGenres(genres);

    return gendersSaved.map((genre) => {
      return {
        id: genre.id,
        name: genre.name,
        endpoint: `/genre/${genre.id}`,
      };
    });
  }

  @Post()
  async postNewBand(@Res() res: any, @Body() newBand: BandDTO) {
    const genres = await this.saveGenres(newBand.genres);
    const members = await this.saveMembers(newBand.members);
    const pastMembers = await this.saveMembers(newBand.pastMembers);
    const discography = await this.saveDiscography(newBand.discography);

    const bandToSave: IBand = {
      ...newBand,
      genres,
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
