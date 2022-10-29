import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';

export const baseURL = 'http://192.168.0.195:3000/'

async function bootstrap() {
  const app: any = await NestFactory.create(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'pubilc'));
  await app.listen(3000);
}
bootstrap();
