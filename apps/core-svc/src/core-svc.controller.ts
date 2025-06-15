import { Controller, Get } from '@nestjs/common';
import { CoreSvcService } from './core-svc.service';

@Controller()
export class CoreSvcController {
  constructor(private readonly coreSvcService: CoreSvcService) {}

  @Get()
  getHello(): string {
    return this.coreSvcService.getHello();
  }
}
