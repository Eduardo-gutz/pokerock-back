import { Document } from 'mongoose';

export interface IUser {
  id?: number;
  name: string;
  birthDate: number;
  username: string;
  email: string;
  password: string;
  refreshToken: string;
}

export interface IUserDoc extends Omit<IUser, 'id'>, Document {}
