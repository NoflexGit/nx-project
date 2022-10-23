import {
  Field,
  ObjectType,
  GraphQLISODateTime,
  Int,
  Float,
} from '@nestjs/graphql';

@ObjectType()
export class PropertyDetails {
  @Field()
  id: string;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt?: Date;

  @Field(() => Int, { nullable: true })
  area?: number;

  @Field(() => Int, { nullable: true })
  rooms?: number;

  @Field(() => Int, { nullable: true })
  bathrooms?: number;

  @Field(() => Int)
  price: number;

  @Field(() => Float, { nullable: true })
  longitude?: number;

  @Field(() => Float, { nullable: true })
  latitude?: number;
}
