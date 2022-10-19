import { Module } from '@nestjs/common';
import { PrismaService } from '@common/prisma';
import { PropertyResolver } from './property.resolver';
import { PropertyService } from './property.service';

@Module({
  providers: [PropertyResolver, PropertyService, PrismaService],
})
export class PropertyModule {}
