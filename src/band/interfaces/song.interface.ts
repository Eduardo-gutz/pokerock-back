import { Document } from 'mongoose';
import { SongDTO } from '../dto/song.dto';

export interface ISong extends Omit<SongDTO, 'id'>, Document {}
