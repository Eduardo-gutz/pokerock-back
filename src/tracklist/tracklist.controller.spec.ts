import { Test, TestingModule } from '@nestjs/testing';
import { TracklistController } from './tracklist.controller';
import { TracklistService } from './tracklist.service';

describe('TracklistController', () => {
  let controller: TracklistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TracklistController],
      providers: [TracklistService],
    }).compile();

    controller = module.get<TracklistController>(TracklistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
