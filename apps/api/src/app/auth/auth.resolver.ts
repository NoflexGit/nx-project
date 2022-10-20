import { BadRequestException, UseGuards } from '@nestjs/common';
import { Query, Args, Context, Mutation } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';

import { LoginUserInput, LoginUserResult, RegisterUserInput, User } from '../user/user.model';
import { AuthService } from './auth.service';
import { GqlAuthGuard } from './guards/gql-auth.guard';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => LoginUserResult)
  @UseGuards(GqlAuthGuard)
  async login(
    @Args('loginUserInput') loginUserInput: LoginUserInput,
    @Context() context
  ) {
    const user = await this.authService.login(context.user);

    if (!user) {
      throw new BadRequestException('Invalid credentials');
    }

    return user;
  }

  @Mutation(() => User)
  async register(@Args('registerUserInput') registerUserInput: RegisterUserInput) {
    return await this.authService.register(registerUserInput);
  }
}
