import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { configService } from './core/configuration/common';
import { ApplicationConfigKeys } from './core/configuration/common/types';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Interview - News API')
    .setDescription('API as interview tech task')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('explorer', app, document);

  const port = configService.get<ApplicationConfigKeys>('APPLICATION_PORT');
  const host = configService.get<ApplicationConfigKeys>('APPLICATION_HOST');
  await app
    .listen(port, host)
    .then(() =>
      console.log(
        `Application is listening on ${port} port with following host ${host}`,
      ),
    );
}
bootstrap();
