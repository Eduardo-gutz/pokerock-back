import { GenderDTO } from '../dto/gender.dto';

export interface IGenderDoc extends Omit<GenderDTO, 'id'>, Document {}
