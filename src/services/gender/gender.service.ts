import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GenderDTO } from 'src/band/dto/gender.dto';
import { IGenderDoc } from 'src/band/interfaces/gender.interface';

@Injectable()
export class GenderService {
  private allGenders: IGenderDoc[] = [];

  constructor(@InjectModel('Gender') private genderModel: Model<IGenderDoc>) {}

  async createGender(gender: GenderDTO) {
    const newGender = new this.genderModel(gender);
    return await newGender.save();
  }

  async readAllGenders() {
    return this.genderModel.find();
  }

  async readGenderByName(name: string) {
    const genders = await this.readAllGenders();

    const genderExist = genders.find(
      (gender) =>
        gender.name.trim().toLowerCase() === name.trim().toLowerCase(),
    );

    return genderExist ?? null;
  }

  // getGenders(): GenderDTO[] {
  //   return this.genders;
  // }

  // getGender(id: number): GenderDTO | null {
  //   return this.genders.find((gender) => gender.id === id) ?? null;
  // }
}
