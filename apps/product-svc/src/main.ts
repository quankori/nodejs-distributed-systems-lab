import { NestFactory } from '@nestjs/core';
import { ProductSvcModule } from './product-svc.module';

async function bootstrap() {
  const app = await NestFactory.create(ProductSvcModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
