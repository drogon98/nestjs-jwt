import { Injectable, Res } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async signIn(username, pass, @Res() res: Response) {
    // Db lookup logic here
    const payload = { sub: username };
    res.cookie('is_auth', 'true', {
      maxAge: 86400000,
      httpOnly: true,
    });
    return res.send({
      access_token: await this.jwtService.signAsync(payload),
    });
  }
}
