import { Injectable } from '@nestjs/common';
import { PrismaService } from '@common/prisma';

@Injectable()
export class PropertyService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.property.findMany();
  }
}
