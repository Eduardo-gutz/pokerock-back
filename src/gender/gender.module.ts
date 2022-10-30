import { Module } from '@nestjs/common';
import { GenderController } from './gender.controller';
import { GenderService } from '../services/gender.service';

@Module({
  providers: [GenderService],
  controllers: [GenderController],
})
export class GenderModule {}
