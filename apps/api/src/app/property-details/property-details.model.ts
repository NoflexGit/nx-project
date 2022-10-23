import { Field, ObjectType, GraphQLISODateTime, Int } from '@nestjs/graphql';

@ObjectType()
export class PropertyDetails {
  @Field()
  id: string;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => Int, { nullable: true })
  area?: number;

  @Field(() => Int, { nullable: true })
  rooms?: number;

  @Field(() => Int, { nullable: true })
  bathrooms?: number;

  @Field(() => Int)
  price: number;
}
