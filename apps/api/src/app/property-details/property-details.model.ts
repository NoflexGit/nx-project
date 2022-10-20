import { Field, ObjectType, GraphQLISODateTime, Int } from '@nestjs/graphql';

@ObjectType()
export class PropertyDetails {
  @Field()
  id: string;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => Int)
  rooms: number;
}
