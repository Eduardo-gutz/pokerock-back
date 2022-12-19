import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import enviroments from './enviroments';

async function bootstrap() {
  const port = Number(enviroments.port);
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(port);
}
bootstrap();
