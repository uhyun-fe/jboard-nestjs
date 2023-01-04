import { Test, TestingModule } from '@nestjs/testing';
import { FbService } from './fb.service';

describe('FbService', () => {
  let service: FbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FbService],
    }).compile();

    service = module.get<FbService>(FbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
