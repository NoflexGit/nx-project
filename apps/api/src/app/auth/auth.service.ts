import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';

import { RegisterUserInput, User } from '../user/user.model';
import { UserService } from '../user/user.service';
import { jwtToken } from './constants';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.getByEmail(email);

    if (!user) {
      return null;
    }

    const isMatch = await argon2.verify(user.password, password);

    if (!isMatch) {
      throw new BadRequestException('Invalid credentials');
    }

    return user;
  }

  login(user: User): { access_token: string } {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(credentials: RegisterUserInput) {
    const user = await this.userService.getByEmail(credentials.email);

    if (user) {
      throw new BadRequestException('User already exists');
    }

    return await this.userService.create(credentials);
  }

  async verifyToken(token: string) {
    const decoded = this.jwtService.verify(token, {
      secret: jwtToken,
    });

    const user = await this.userService.getByEmail(decoded.email);

    if (!user) {
      return null;
    }

    return user;
  }
}
