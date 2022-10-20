import { Module } from '@nestjs/common';
import { PrismaService } from '@common/prisma';
import { PropertyDetailsService } from './property-details.service';

@Module({
  providers: [PropertyDetailsService, PrismaService],
  exports: [PropertyDetailsService],
})
export class PropertyDetailsModule {}
