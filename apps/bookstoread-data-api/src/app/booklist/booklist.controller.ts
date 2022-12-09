import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Token } from '../auth/token.decorator';
import { InjectToken } from '../auth/token.decorator';
import { Booklist } from './booklist.schema';
import { BookListService } from './booklist.service';

@Controller('booklist')
export class BookListController {
  constructor(private BookListService: BookListService) {}

  @Get()
  async getAll(@InjectToken() token: Token): Promise<Booklist[]> {
    console.log(token);
    return this.BookListService.getAll(token);
  }
  @Post()
  async createBookList(
    @InjectToken() token: Token,
    @Body() body: Booklist
  ): Promise<Booklist> {
    return await this.BookListService.createBookList(token, body);
  }
  @Get(':id')
  async getById(
    @Param() id: string,
    @InjectToken() token: Token
  ): Promise<Booklist> {
    return this.BookListService.getOneById(id['id'], token);
  }
  @Put(':id')
  async updateBookList(
    @Param() id: string,
    @InjectToken() token: Token,
    @Body() bookList: Booklist
  ): Promise<Booklist> {
    return this.BookListService.updateOne(id['id'], token, bookList);
  }
}
