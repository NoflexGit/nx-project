import { Module } from '@nestjs/common';
import { PrismaService } from '@common/prisma';
import { MessagesResolver } from './messages.resolver';
import { MessagesService } from './messages.service';

@Module({
  imports: [],
  providers: [MessagesResolver, MessagesService, PrismaService],
})
export class MessagesModule {}
