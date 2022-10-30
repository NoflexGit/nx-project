import { Field, ObjectType, GraphQLISODateTime } from '@nestjs/graphql';
import { User } from '../../../user/dto/models/user.model';

@ObjectType()
export class Chat {
  @Field()
  id: string;

  @Field(() => [Message])
  messages: Message[];

  @Field(() => [Participant])
  participants: Participant[];
}

@ObjectType()
export class Message {
  @Field()
  id: string;

  @Field()
  text: string;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;
}

@ObjectType()
export class Participant {
  @Field()
  id: string;

  @Field()
  userId: string;

  @Field()
  chatId: string;

  @Field(() => User)
  user: User;
}
