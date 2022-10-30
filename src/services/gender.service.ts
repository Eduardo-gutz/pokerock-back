import { Injectable } from '@nestjs/common';
import { GenderDTO } from 'src/band/dto/gender.dto';

@Injectable()
export class GenderService {
  private genders: GenderDTO[] = [];

  saveNewGender(gender: GenderDTO) {
    const newGender = {
      ...gender,
      id: this.genders.length + 1,
    };

    this.genders.push(newGender);

    return newGender;
  }

  getGenders(): GenderDTO[] {
    return this.genders;
  }

  getGender(id: number): GenderDTO | null {
    return this.genders.find((gender) => gender.id === id) ?? null;
  }
}
