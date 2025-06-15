import { Controller, Get } from '@nestjs/common';
import { ApiGatewaySvcService } from './api-gateway-svc.service';

@Controller()
export class ApiGatewaySvcController {
  constructor(private readonly apiGatewaySvcService: ApiGatewaySvcService) {}

  @Get()
  getHello(): string {
    return this.apiGatewaySvcService.getHello();
  }
}
