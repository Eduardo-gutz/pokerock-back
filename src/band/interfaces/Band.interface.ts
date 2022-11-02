import { Document } from 'mongoose';
import { IEndpoint } from 'src/common/interfaces/endpoint.interface';

export interface IBand {
  id?: string;
  name: string;
  summary: string;
  origin: string;
  startTemp: number;
  endTemp: number;
  toPresent: boolean;
  discography: IEndpoint[];
  genres: IEndpoint[];
  members: IEndpoint[];
  pastMembers: IEndpoint[];
}

export interface IBandDoc extends Omit<IBand, 'id'>, Document {}
