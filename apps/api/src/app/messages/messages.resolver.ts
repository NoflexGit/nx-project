import { Resolver, Query, ResolveField, Parent, Args } from '@nestjs/graphql';
import { MessagesService } from './messages.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Chat, Message, Participant } from './dto/models/messages.model';

@Resolver(() => Chat)
export class MessagesResolver {
  constructor(private readonly messagesService: MessagesService) {}

  @Query(() => [Chat])
  // @UseGuards(JwtAuthGuard)
  async chatsByUserId(@Args('id') id: string) {
    const chats = await this.messagesService.getChatsByUser(id);

    console.log('chats', chats[0].participants[0]);

    return this.messagesService.getChatsByUser(id);
  }
}
