import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Ativa a validação global
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remove propriedades extras que não estão no DTO
      forbidNonWhitelisted: true, // Lanca erro se houver propriedades desconhecidas
      transform: true, // Converte os tipos automaticamente
    }),
  );

  // Configura o Swagger
  const config = new DocumentBuilder()
    .setTitle('Pizzaria API')
    .setDescription('API para gerenciamento de pizzaria')
    .setVersion('1.0')
    .addBearerAuth() // Adiciona suporte para JWT (Bearer Token) opcional
    .addServer('http://localhost:3000') // Adiciona o servidor base
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document); // Configuração do caminho /api/docs

  await app.listen(3000);
  console.log(`🚀 Aplicação está rodando em http://localhost:3000`);
  console.log(
    `📚 Documentação do Swagger disponível em http://localhost:3000/api/docs`,
  );
}

bootstrap();
