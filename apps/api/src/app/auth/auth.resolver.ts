import { UseGuards } from '@nestjs/common';
import { Query, Args, Context, Mutation } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { GetCreateUserArgs } from '../user/dto/args/create-user.args';
import { GetLoginUserArgs } from '../user/dto/args/login-user.args';

import { LoginUserResult, User } from '../user/dto/models/user.model';
import { AuthService } from './auth.service';
import { GqlAuthGuard } from './guards/gql-auth.guard';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginUserResult)
  @UseGuards(GqlAuthGuard)
  async login(@Args() args: GetLoginUserArgs, @Context() context) {
    const { access_token } = this.authService.login(context.req.user);

    context.req.res.cookie('jwt_token', access_token, {
      httpOnly: true,
      secure: false,
      maxAge: 3600000,
    });

    return { access_token };
  }

  @Mutation(() => User)
  async verifyToken(@Args('token') token: string) {
    return this.authService.verifyToken(token);
  }

  @Mutation(() => User)
  async register(@Args() args: GetCreateUserArgs) {
    return await this.authService.register(args);
  }
}
