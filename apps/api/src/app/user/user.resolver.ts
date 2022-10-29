import { Injectable } from '@nestjs/common';
import { UserService } from './user.service';
import { Args, Query } from '@nestjs/graphql';
import { User } from './dto/models/user.model';

@Injectable()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User)
  async user(@Args('id') id: string) {
    return this.userService.getById(id);
  }
}
