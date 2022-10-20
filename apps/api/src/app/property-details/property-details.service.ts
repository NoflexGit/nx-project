import { Injectable } from '@nestjs/common';
import { PrismaService } from '@common/prisma';

@Injectable()
export class PropertyDetailsService {
  constructor(private prisma: PrismaService) {}

  async getById(id: string) {
    return this.prisma.propertyDetails.findUnique({
      where: {
        propertyId: id,
      },
    });
  }
}
