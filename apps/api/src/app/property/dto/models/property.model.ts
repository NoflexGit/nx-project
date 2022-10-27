import {
  Field,
  ObjectType,
  GraphQLISODateTime,
  Int,
  Float,
  registerEnumType,
} from '@nestjs/graphql';
import { PropertyType } from '@prisma/client';

import { Agent, User } from '../../../user/dto/models/user.model';

registerEnumType(PropertyType, {
  name: 'PropertyType',
});

@ObjectType()
export class Review {
  @Field()
  id: string;

  @Field()
  comment: string;

  @Field(() => Float)
  rating: number;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;

  @Field(() => User)
  user: User;
}

@ObjectType()
export class PropertyReviews {
  @Field(() => [Review], { nullable: true })
  list?: Review[];

  @Field(() => Int, { nullable: true })
  count?: number;

  @Field(() => Float, { nullable: true })
  average?: number;
}

@ObjectType()
export class PropertyDetails {
  @Field()
  id: string;

  @Field(() => Int)
  price: number;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt?: Date;

  @Field(() => [String])
  images: string[];

  @Field(() => Int, { nullable: true })
  area?: number;

  @Field(() => Int, { nullable: true })
  rooms?: number;

  @Field(() => Int, { nullable: true })
  bathrooms?: number;

  @Field(() => Float, { nullable: true })
  longitude?: number;

  @Field(() => Float, { nullable: true })
  latitude?: number;

  @Field({ nullable: true })
  description?: string;
}

@ObjectType()
export class Property {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field(() => PropertyType)
  type: PropertyType;

  @Field()
  address: string;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field({ nullable: true })
  previewImg?: string;

  @Field()
  details: PropertyDetails;

  @Field()
  agent: Agent;

  @Field(() => PropertyReviews)
  reviews: PropertyReviews;

  @Field()
  agentId: string;
}
