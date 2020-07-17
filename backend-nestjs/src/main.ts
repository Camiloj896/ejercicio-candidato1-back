import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { FilterExeptionBussines } from './infrastructure/exceptions/exceptions-business';
import { UserModule } from './infrastructure/user/user.module';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  const logger = app.get(Logger);

  app.useGlobalFilters(new FilterExeptionBussines(logger));

  const swaggerOptions = new DocumentBuilder()
    .setTitle('User Management API')
    .setDescription('API Rest To User Crud')
    .setVersion('1.0')
    .build();

  const Document = SwaggerModule.createDocument(app, swaggerOptions, {
      include: [UserModule]
  });

  SwaggerModule.setup('api/swagger/user', app, Document);

  //ENABLE CORS
  app.enableCors();
  await app.listen(3000);

}

bootstrap();
