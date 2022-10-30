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

  async getParticipantsByChatId(chatId: string) {
    const data = this.prisma.chatParticipant.findMany({
      where: {
        chatId,
      },
      include: {
        user: true,
      },
    });

    console.log(data);

    return data;
  }

  async getChatsByUser(userId: string) {
    return await this.prisma.chat.findMany({
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
            user: true,
          },
        },
      },
    });
  }

  async createChat(participantIds: string[]) {
    return await this.prisma.chat.create({
      data: {
        participants: {
          createMany: {
            data: participantIds.map((id) => ({
              userId: id,
            })),
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
