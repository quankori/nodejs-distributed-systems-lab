import { Module } from '@nestjs/common';
import { ApiGatewaySvcController } from './api-gateway-svc.controller';
import { ApiGatewaySvcService } from './api-gateway-svc.service';

@Module({
  imports: [],
  controllers: [ApiGatewaySvcController],
  providers: [ApiGatewaySvcService],
})
export class ApiGatewaySvcModule {}
