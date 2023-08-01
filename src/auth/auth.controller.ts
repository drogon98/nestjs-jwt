import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { IUserLoginDTO } from '../dtos/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(
    @Req() req: Request,
    @Body() body: IUserLoginDTO,
    @Res() res: Response,
  ) {
    return this.authService.signIn(body.username, body.password, res);
  }

  @Get('logout')
  async logout(@Req() req: Request, @Res() res: Response) {
    // Grab token from request
    // Blacklist token
    res.clearCookie('is_auth');
    return res.status(200).send({ message: 'Logout Success' });
  }
}
