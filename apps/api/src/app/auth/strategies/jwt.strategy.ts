import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from '../../user/user.service';
import { jwtToken } from '../constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtToken,
      logging: true,
    });
  }

  async validate(payload: { email: string; sub: string }) {
    const user = await this.userService.getByEmail(payload.email);

    if (!user) {
      return null;
    }

    return user;
  }
}
