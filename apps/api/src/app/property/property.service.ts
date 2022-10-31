import { Injectable } from '@nestjs/common';
import { PrismaService } from '@common/prisma';

@Injectable()
export class PropertyService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.property.findMany();
  }

  async getById(id: string) {
    return this.prisma.property.findUnique({
      where: { id },
    });
  }

  async getDetails(propertyId: string) {
    return this.prisma.propertyDetails.findUnique({
      where: { propertyId },
    });
  }

  async getReviews(propertyId: string) {
    const reviews = await this.prisma.review.findMany({
      where: { propertyId },
      include: { user: true },
    });

    if (reviews.length === 0) {
      return [];
    }

    const count = reviews.length;
    const average =
      reviews.reduce((acc, { rating }) => acc + rating, 0) / count;

    return {
      list: reviews,
      count,
      average,
    };
  }

  async addPropertyToFavorites(propertyId: string, userId: string) {
    const favoritesByUser = await this.prisma.favorite.findMany({
      where: { userId },
    });
  }

  async getFavorites(userId: string) {
    const favorites = await this.prisma.favorite.findMany({
      where: { userId },
      include: { property: true },
    });

    return favorites.map(({ property }) => property);
  }
}
