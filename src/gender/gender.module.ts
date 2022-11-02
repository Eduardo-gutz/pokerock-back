import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GenderSchema } from 'src/band/schema/gender.schema';
import { GenderService } from 'src/services/gender/gender.service';
import { GenderController } from './gender.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Gender', schema: GenderSchema }]),
  ],
  providers: [GenderService],
  controllers: [GenderController],
})
export class GenderModule {}
