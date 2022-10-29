import {
  Field,
  ObjectType,
  GraphQLISODateTime,
  Int,
  Float,
  registerEnumType,
} from '@nestjs/graphql';
import { PropertyType } from '@prisma/client';

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

  @Field()
  name: string;
}
