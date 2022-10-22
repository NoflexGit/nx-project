import { Injectable } from '@nestjs/common';
import { PrismaService } from '@common/prisma';
import * as argon2 from 'argon2';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async create(credentials) {
    const hashedPassword = await argon2.hash(credentials.password);

    return this.prisma.user.create({
      data: {
        ...credentials,
        password: hashedPassword,
      },
    });
  }
}