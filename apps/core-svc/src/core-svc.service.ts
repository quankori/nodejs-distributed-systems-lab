import { Injectable } from '@nestjs/common';

@Injectable()
export class CoreSvcService {
  getHello(): string {
    return 'Hello World!';
  }
}
