import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';

import {
  ResourceId,
  Token,
  UserCredentials,
  UserRegistration,
} from '@schoolproject/data';

import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() credentials: UserRegistration): Promise<ResourceId> {
    try {
      await this.authService.registerUser(
        credentials.password,
        credentials.emailAddress
      );

      return {
        id: await this.authService.createUser(
          credentials.emailAddress,
          credentials.firstName,
          credentials.lastName,
          credentials.phoneNumber,
          credentials.isStudent
        ),
      };
    } catch (e: any) {
      console.log(e);

      throw new HttpException('Emailaddress invalid', HttpStatus.BAD_REQUEST);
    }
  }

  @Post('login')
  async login(@Body() credentials: UserCredentials): Promise<Token> {
    try {
      return {
        token: await this.authService.generateToken(
          credentials.emailAddress,
          credentials.password
        ),
      };
    } catch (e) {
      console.log(e);
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
  }
}
