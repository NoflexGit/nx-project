import { Field, ArgsType } from '@nestjs/graphql';

@ArgsType()
export class GetLoginUserArgs {
  @Field()
  email: string;

  @Field()
  password: string;
}
