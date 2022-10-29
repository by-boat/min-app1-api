import { Test, TestingModule } from '@nestjs/testing';
import { GetGruopsController } from './get-gruops.controller';

describe('GetGruopsController', () => {
  let controller: GetGruopsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetGruopsController],
    }).compile();

    controller = module.get<GetGruopsController>(GetGruopsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
