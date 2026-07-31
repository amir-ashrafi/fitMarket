import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser';
import { seedAdmin } from './seed/admin.seed';
import { UsersService } from './users/users.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
  origin: 'http://localhost:4200',
  methods: 'GET,POST,PUT,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type, Authorization',
  credentials: true,
});
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true,
    }),
  );
app.use(cookieParser());
  const usersService = app.get(UsersService);
  await seedAdmin(usersService);
  await app.listen(process.env.PORT ?? 3002);
}
bootstrap();
