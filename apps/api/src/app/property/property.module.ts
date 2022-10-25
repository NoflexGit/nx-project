import { Module } from '@nestjs/common';
import { PrismaService } from '@common/prisma';
import { PropertyResolver } from './property.resolver';
import { PropertyService } from './property.service';
import { UserService } from '../user/user.service';

@Module({
  imports: [],
  providers: [PropertyResolver, PropertyService, PrismaService, UserService],
})
export class PropertyModule {}
