import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomValidationPipe } from './common/pipes/validation.pipe';
import { HttpExceptionFilter } from './common/filters/exseption.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

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

  const config = new DocumentBuilder()
    .setTitle('BFF')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(parseInt(process.env.PORT) ?? 3000);
}
bootstrap();
