import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BandModule } from './band/band.module';

@Module({
  imports: [BandModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
