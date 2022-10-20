import { Module } from '@nestjs/common';
import { PrismaService } from '@common/prisma';
import { PropertyResolver } from './property.resolver';
import { PropertyService } from './property.service';
import { PropertyDetailsModule } from '../property-details/property-details.module';

@Module({
  imports: [PropertyDetailsModule],
  providers: [PropertyResolver, PropertyService, PrismaService],
})
export class PropertyModule {}
