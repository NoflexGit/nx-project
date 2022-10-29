import { Injectable } from '@nestjs/common';
import { PrismaService } from '@common/prisma';

@Injectable()
export class MessagesService {
  constructor(private readonly prisma: PrismaService) {}

  async getChats() {
    return this.prisma.chat.findMany({
      include: {
        messages: true,
        participants: true,
      },
    });
  }

  async getChatsByUser(userId: string) {
    return this.prisma.chat.findMany({
      where: {
        participants: {
          some: {
            userId,
          },
        },
      },
      include: {
        messages: true,
        participants: {
          include: {
            user: {
              select: {
                id: true,
                avatar: true,
              },
            },
          },
        },
      },
    });
  }

  async getMessagesByChatId(chatId: string) {
    return this.prisma.message.findMany({
      where: {
        chatId,
      },
      include: {
        sender: true,
      },
    });
  }
}
