import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async signIn(username, pass) {
    // Db lookup logic here
    const payload = { sub: username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
