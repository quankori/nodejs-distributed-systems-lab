import { Test, TestingModule } from '@nestjs/testing';
import { ApiGatewaySvcController } from './api-gateway-svc.controller';
import { ApiGatewaySvcService } from './api-gateway-svc.service';

describe('ApiGatewaySvcController', () => {
  let apiGatewaySvcController: ApiGatewaySvcController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ApiGatewaySvcController],
      providers: [ApiGatewaySvcService],
    }).compile();

    apiGatewaySvcController = app.get<ApiGatewaySvcController>(ApiGatewaySvcController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(apiGatewaySvcController.getHello()).toBe('Hello World!');
    });
  });
});
