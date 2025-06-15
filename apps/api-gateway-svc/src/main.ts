import { NestFactory } from '@nestjs/core';
import { ApiGatewaySvcModule } from './api-gateway-svc.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewaySvcModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
