import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiGatewaySvcService {
  getHello(): string {
    return 'Hello World!';
  }
}
