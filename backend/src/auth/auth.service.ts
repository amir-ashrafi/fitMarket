import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { Role } from '../users/user.schema';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { ConfigService } from '@nestjs/config';
import type { Response } from 'express';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService:JwtService,
    private configService:ConfigService,
  ) {}
  async register(registerDto: RegisterDto) {
    const { email, password } = registerDto;

    const existingUser = await this.usersService.findByEmail(email);
    if (existingUser) {
      throw new BadRequestException('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.usersService.create({
      email,
      password: hashedPassword,
      role: Role.USER,
    });

    return {
      id: user._id,
      email: user.email,
      role: user.role,
    };
  }
async login(loginDto: LoginDto) {
  const { email, password } = loginDto;

  const user = await this.usersService.findByEmail(email);
  if (!user) {
    throw new UnauthorizedException('Invalid credentials');
  }

  if (!user.isActive) {
    throw new UnauthorizedException('User is inactive');
  }

  const passwordValid = await bcrypt.compare(password, user.password);
  if (!passwordValid) {
    throw new UnauthorizedException('Invalid credentials');
  }

  const { accessToken, refreshToken } =
    await this.generateTokens(user);

  await this.usersService.updateRefreshToken(
    user._id.toString(),
    refreshToken,
  );
  return {
    accessToken,
    refreshToken, 
  };
}

private async generateTokens(user: any) {
  const payload = {
    sub: user._id,
    email: user.email,
    role: user.role,
  };

  const accessToken = await this.jwtService.signAsync(payload, {
    expiresIn: '15m',
  });

  const refreshToken = await this.jwtService.signAsync(payload, {
    secret: this.configService.get('JWT_REFRESH_SECRET'),
    expiresIn: '7d',
  });

  return { accessToken, refreshToken };
}
async refresh(refreshToken: string, res: Response) {
  if (!refreshToken) {
    throw new UnauthorizedException();
  }

  const payload = await this.jwtService.verifyAsync(refreshToken, {
    secret: this.configService.get('JWT_REFRESH_SECRET'),
  });

  const user = await this.usersService.findByEmail(payload.email);
  if (!user || !user.refreshTokenHash) {
    throw new UnauthorizedException();
  }

  const isValid = await bcrypt.compare(
    refreshToken,
    user.refreshTokenHash,
  );

  if (!isValid) {
    throw new UnauthorizedException();
  }

  const tokens = await this.generateTokens(user);

  await this.usersService.updateRefreshToken(
    user._id.toString(),
    tokens.refreshToken,
  );

  res.cookie('refresh_token', tokens.refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    path: '/auth/refresh',
  });

  return { accessToken: tokens.accessToken };
}
async logout(userId: string) {
  await this.usersService.updateRefreshToken(userId, null);
}
}
