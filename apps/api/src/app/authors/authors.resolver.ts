import {
  Resolver,
  Query,
  ResolveField,
  Args,
  Parent,
  Int,
} from '@nestjs/graphql';
import { Author } from './models/author.model';

@Resolver(() => Author)
export class AuthorsResolver {
  @Query(() => Author)
  async author(@Args('id', { type: () => Int }) id: number) {
    return id;
  }

  @ResolveField()
  async posts(@Parent() author: Author) {
    const { id } = author;
    return '123';
  }
}
