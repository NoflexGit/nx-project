import { Field, ObjectType, InputType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
  id: string;

  @Field()
  email: string;

  @Field()
  name: string;

  @Field()
  role: string;
}

@ObjectType()
export class LoginUserResult {
  @Field()
  access_token: string;
}

@InputType()
export class LoginUserInput {
  @Field()
  email: string;

  @Field()
  password: string;
}

@InputType()
export class RegisterUserInput {
  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  name: string;
}
