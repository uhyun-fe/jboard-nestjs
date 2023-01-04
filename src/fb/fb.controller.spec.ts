import { Test, TestingModule } from '@nestjs/testing';
import { FbController } from './fb.controller';

describe('FbController', () => {
  let controller: FbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FbController],
    }).compile();

    controller = module.get<FbController>(FbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
