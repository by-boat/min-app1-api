import { Test, TestingModule } from '@nestjs/testing';
import { GetAssetsController } from './get-assets.controller';

describe('GetAssetsController', () => {
  let controller: GetAssetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetAssetsController],
    }).compile();

    controller = module.get<GetAssetsController>(GetAssetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
