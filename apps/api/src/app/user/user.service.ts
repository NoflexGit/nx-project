import { Injectable } from '@nestjs/common';
import { PrismaService } from '@common/prisma';
import * as argon2 from 'argon2';
import { Agent } from './dto/models/user.model';

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

  async getAgent(agentId: string): Promise<Agent> {
    const agent = await this.prisma.user.findUnique({
      where: { id: agentId },
    });

    const propertiesCount = await this.prisma.property.count({
      where: { agentId },
    });

    return {
      ...agent,
      propertiesCount,
    };
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
