import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUserDoc } from './entities/user.interface';

export type User = any;

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<IUserDoc>) {}

  async findOne(username: string): Promise<User | undefined> {
    const users = await this.userModel.find();
    return users.find((user) => user.username === username);
  }

  async findById(userId: string): Promise<User | undefined> {
    const user = await this.userModel.findById(userId);
    return user;
  }

  async update(id: string, updateUserDto: User): Promise<IUserDoc | null> {
    return this.userModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .exec();
  }
}
