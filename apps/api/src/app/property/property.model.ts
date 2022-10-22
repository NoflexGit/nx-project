import { Field, ObjectType, GraphQLISODateTime } from '@nestjs/graphql';
import { PropertyDetails } from '../property-details/property-details.model';

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

  @Field({ nullable: true })
  previewImg?: string;

  @Field()
  details: PropertyDetails;
}
