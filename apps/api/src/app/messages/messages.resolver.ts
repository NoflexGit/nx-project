import {
  Resolver,
  Query,
  Args,
  Subscription,
  Mutation,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { MessagesService } from './messages.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Chat, Message, Participant } from './dto/models/messages.model';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

@Resolver(() => Chat)
export class MessagesResolver {
  constructor(private readonly messagesService: MessagesService) {}

  @Query(() => [Chat])
  // @UseGuards(JwtAuthGuard)
  async getChatsByUser(@Args('id') id: string) {
    return this.messagesService.getChatsByUser(id);
  }

  @Mutation(() => Chat)
  // @UseGuards(JwtAuthGuard)
  async createChat(
    @Args({ name: 'users', type: () => [String] }) users: string[]
  ) {
    const chat = await this.messagesService.createChat(users);

    await pubSub.publish('chatCreated', { chatCreated: chat });

    return chat;
  }

  @Subscription(() => Chat)
  // @UseGuards(JwtAuthGuard)
  async chatCreated() {
    return pubSub.asyncIterator('chatCreated');
  }
}
