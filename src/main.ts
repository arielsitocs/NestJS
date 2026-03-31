import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Habilita la validacion de los DTO siempre y cuando cada modulo tenga el suyo //
  app.useGlobalPipes(new ValidationPipe({
    // Valida que los objetos contengan solo los datos contemplados en el DTO, si hay un atributo extra, no lo permite //
    whitelist: true
  }))

  // Configuracion de swagger para documentar //
  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  // Se habilita CORS para evitar errores desde el frontend //
  app.enableCors();

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
