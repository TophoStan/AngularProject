import { Controller, Get, Param } from '@nestjs/common';

import { UserService } from './user.service';
import { User as UserModel } from './user.schema';

import { User } from '@schoolproject/data';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAll(): Promise<UserModel[]> {
    return this.userService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<UserModel[]> {
    return this.userService.getOne(id);
  }
}
