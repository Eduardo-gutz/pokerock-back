import { Injectable } from '@nestjs/common';
import { AlbumSaver } from 'src/album/helpers/albumSaver';
import { ArtistService } from '../artist.service';
import { ArtistDTO } from '../dto/artist.dto';

@Injectable()
export class ArtistSaver {
  constructor(
    private readonly artistService: ArtistService,
    private readonly albumHelper: AlbumSaver,
  ) {}

  async saveMembers(members: ArtistDTO[]) {
    const savedMembers = members.map(async (member) => {
      const discography = await this.albumHelper.saveDiscography(
        member.discography,
      );

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
}
