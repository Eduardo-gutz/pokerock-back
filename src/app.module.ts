import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BandModule } from './band/band.module';
import { GenderController } from './gender/gender.controller';
import { GenderModule } from './gender/gender.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    BandModule,
    GenderModule,
    MongooseModule.forRoot('mongodb://localhost/bands'),
  ],
  controllers: [AppController, GenderController],
  providers: [AppService],
})
export class AppModule {}
