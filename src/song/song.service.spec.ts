import { Test, TestingModule } from '@nestjs/testing';
import { SongService } from './song.service';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ISong } from 'src/song/entities/song.interface';
import { SongDTO } from './dto/song.dto';

const songExample = {
  number: 1,
  name: 'example song',
  writers: [],
  length: 180000,
};

const mockSong = (song: SongDTO = songExample): ISong => ({ ...song } as ISong);

describe('SongService', () => {
  let service: SongService;
  let model: Model<ISong>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SongService,
        {
          provide: getModelToken('Song'),
          // notice that only the functions we call from the model are mocked
          useValue: {
            new: jest.fn().mockResolvedValue(mockSong()),
            constructor: jest.fn().mockResolvedValue(mockSong()),
            find: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            create: jest.fn(),
            remove: jest.fn(),
            exec: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<SongService>(SongService);
    model = module.get<Model<ISong>>(getModelToken('Song'));
  });

  it('should be defined', () => {
    expect(service.createSong).toBeDefined();
  });

  it('should insert a new cat', async () => {
    jest.spyOn(model, 'create').mockImplementationOnce(() =>
      Promise.resolve({
        id: '63633a9896da40f56b6da611',
        number: 1,
        name: 'example song',
        writers: [],
        length: 180000,
      }),
    );
    const newSong = await service.createSong({
      number: 1,
      name: 'example song',
      writers: [],
      length: 180000,
    });
    expect(newSong).toEqual(mockSong(newSong));
  });
});
