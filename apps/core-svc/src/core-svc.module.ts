import { Module } from '@nestjs/common';
import { CoreSvcController } from './core-svc.controller';
import { CoreSvcService } from './core-svc.service';

@Module({
  imports: [],
  controllers: [CoreSvcController],
  providers: [CoreSvcService],
})
export class CoreSvcModule {}
