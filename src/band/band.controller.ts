import { Body, Controller, Post } from '@nestjs/common';
import { BandService } from './band.service';
import { BandDTO } from './dto/band.dto';

@Controller('band')
export class BandController {
  constructor(private service: BandService) {}

  @Post()
  postNewBand(@Body() newBand: BandDTO) {
    console.log(newBand);
  }
}
