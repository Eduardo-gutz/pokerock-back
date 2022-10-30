import { Document } from 'mongoose';
import { IEndpoint } from 'src/common/interfaces/endpoint.interface';

export interface IBand {
  id?: number;
  name: string;
  summary: string;
  origin: string;
  startTemp: number;
  endTemp: number;
  toPresent: boolean;
  discography: IEndpoint[];
  genders: IEndpoint[];
  members: IEndpoint[];
  pastMembers: IEndpoint[];
}

export interface IBandDoc extends Omit<IBand, 'id'>, Document {}
