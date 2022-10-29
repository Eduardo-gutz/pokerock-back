import { Injectable } from '@nestjs/common';
import { IBand } from './interfaces/Band.interface';

@Injectable()
export class BandService {
  private bands: IBand[] = [];

  getBands() {
    return this.bands;
  }

  saveBand(newBand: IBand) {
    this.bands.push(newBand);
  }
}
