import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import type { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get('profile')
  @UseGuards(JwtAuthGuard)
  profile(@Req() req){
    return req.user;
  }
  @Post('register')
  register(@Body() registerDto:RegisterDto){
    return this.authService.register(registerDto)
  }
@Post('login')
async login(
  @Body() loginDto: LoginDto,
  @Res({ passthrough: true }) res: Response,
) {
  const { accessToken, refreshToken } =
    await this.authService.login(loginDto);

  res.cookie('refresh_token', refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/auth/refresh',
  });

  return { accessToken };
}
@Post('refresh')
async refresh(@Req() req, @Res({ passthrough: true }) res) {
  return this.authService.refresh(req.cookies['refresh_token'], res);
}
@Post('logout')
@UseGuards(JwtAuthGuard)
async logout(@Req() req, @Res({ passthrough: true }) res: Response) {
  await this.authService.logout(req.user.userId);
  res.clearCookie('refresh_token', { path: '/auth/refresh' });
  return { message: 'Logged out' };
}
}
