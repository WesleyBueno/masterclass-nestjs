import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
