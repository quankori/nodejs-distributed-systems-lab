import { Test, TestingModule } from '@nestjs/testing';
import { CoreSvcController } from './core-svc.controller';
import { CoreSvcService } from './core-svc.service';

describe('CoreSvcController', () => {
  let coreSvcController: CoreSvcController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CoreSvcController],
      providers: [CoreSvcService],
    }).compile();

    coreSvcController = app.get<CoreSvcController>(CoreSvcController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(coreSvcController.getHello()).toBe('Hello World!');
    });
  });
});
