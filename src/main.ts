import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomValidationPipe } from './common/pipes/validation.pipe';
import { HttpExceptionFilter } from './common/filters/exseption.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(
    new CustomValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      enableDebugMessages: false,
    }),
  );
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(parseInt(process.env.PORT) ?? 3000);
}
bootstrap();
