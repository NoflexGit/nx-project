import {
  Field,
  GraphQLISODateTime,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { Role } from '@prisma/client';

registerEnumType(Role, {
  name: 'Role',
});

@ObjectType()
export class User {
  @Field()
  id: string;

  @Field()
  email: string;

  @Field()
  name: string;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => Role)
  role: Role;

  @Field({ nullable: true })
  address?: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  avatar?: string;
}

@ObjectType()
export class Agent extends User {
  @Field()
  propertiesCount: number;
}

@ObjectType()
export class LoginUserResult {
  @Field()
  access_token: string;
}
