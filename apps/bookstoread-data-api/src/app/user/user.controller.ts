import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Put,
} from '@nestjs/common';

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
    console.log();

    const result = await this.userService.getOneByUUID(token.id);
    console.log(result);

    return result;
  }
  @Put(':id')
  async updateOne(
    @Param('id') id: string,
    @Body() updatedUser: UserModel,
    @InjectToken() token: Token
  ): Promise<UserModel> {
    const user = await this.userService.getOneByUUID(token.id);
    if (user.roles.includes('admin')) {
      return await this.userService.updateOne(updatedUser);
    } else {
      throw new HttpException(
        'Not allowed to do this action as a user',
        HttpStatus.FORBIDDEN
      );
    }
  }
  @Put(':id/booklist')
  async updateBookListOfUser(
    @Param('id') id: string,
    @Body() body: any,
    @InjectToken() token: Token
  ): Promise<UserModel> {
    const user = await this.userService.getOneByUUID(token.id);
    if (user) {
      if (user.id == id) {
        return await this.userService.AddBookToBooklistOfUser(
          user,
          body,
          token
        );
      }
      throw new HttpException(
        'Not allowed to edit something that is not your own',
        HttpStatus.FORBIDDEN
      );
    }
    throw new HttpException('User does not exist', HttpStatus.NOT_FOUND);
  }
  @Delete(':id/booklist')
  async deletteBookBookListOfUser(
    @Param('id') id: string,
    @Body() body: any,
    @InjectToken() token: Token
  ): Promise<UserModel> {
    const user = await this.userService.getOneByUUID(token.id);
    if (user) {
      if (user.id == id) {
        return await this.userService.removeBookFromBookListOfUser(
          user,
          body,
          token
        );
      }
      throw new HttpException(
        'Not allowed to edit something that is not your own',
        HttpStatus.FORBIDDEN
      );
    }
    throw new HttpException('User does not exist', HttpStatus.NOT_FOUND);
  }
  @Get(':id')
  async getOne(@Param('id') id: string): Promise<UserModel> {
    console.log(id);

    return await this.userService.getOneByUUID(id);
  }
}
