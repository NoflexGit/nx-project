import { PrismaService } from '@common/prisma';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';

@Module({
  providers: [UserService, PrismaService, UserResolver],
  exports: [UserService],
})
export class UserModule {}
