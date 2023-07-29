import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Simple JWT example')
    .setDescription('JWT authentication example')
    .setVersion('1.0')
    .addTag('JWT')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api/docs', app, document);
  const PORT = process.env.PORT || 3002;
  await app.listen(PORT, () =>
    console.log(
      `😂Server started on port ${PORT}. Visiti http://localhost:${PORT}/api/docs for the docs`,
    ),
  );
}
bootstrap();
