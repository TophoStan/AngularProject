import { Body, Controller, Get, Param, Put } from '@nestjs/common';

import { UserService } from './user.service';
import { User as UserModel } from './user.schema';

import { User } from '@schoolproject/data';
import { InjectToken, Token } from '../auth/token.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAll(): Promise<UserModel[]> {
    return this.userService.getAll();
  }

  @Get('self')
  async getSelf(@InjectToken() token: Token): Promise<UserModel> {
    const result = await this.userService.getOneByMongo(token.id);
    console.log(result);

    return result;
  }
  @Put(':id')
  async updateOne(
    @Param('id') id: string,
    @Body() updatedUser: UserModel
  ): Promise<UserModel> {
    console.log('UpdateUser');

    return await this.userService.updateOne(updatedUser);
  }
  @Get(':id')
  async getOne(@Param('id') id: string): Promise<UserModel> {
    console.log(id);

    return await this.userService.getOneByMongo(id);
  }
}
