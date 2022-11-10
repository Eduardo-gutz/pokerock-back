import { Document } from 'mongoose';

export interface IBand {
  id?: string;
  name: string;
  summary: string;
  origin: string;
  startTemp: number;
  endTemp: number;
  toPresent: boolean;
  discography: string[];
  genres: string[];
  members: string[];
  pastMembers: string[];
}

export interface IBandDoc extends Omit<IBand, 'id'>, Document {}
