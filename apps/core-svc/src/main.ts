import { NestFactory } from '@nestjs/core';
import { CoreSvcModule } from './core-svc.module';

async function bootstrap() {
  const app = await NestFactory.create(CoreSvcModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
