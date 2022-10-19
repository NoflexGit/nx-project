import { Field, ObjectType, GraphQLISODateTime } from '@nestjs/graphql';

@ObjectType()
export class Property {
  @Field()
  id: string;

  @Field()
  type: string;

  @Field()
  address: string;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field()
  previewImg: string;
}
