import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectToken, Token } from '../auth/token.decorator';
import { Book } from './book.schema';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get()
  async getAllBooks(): Promise<Book[]> {
    return this.bookService.getAllBooks();
  }
  @Get(':id')
  async getBookById(@Param() id: string): Promise<Book> {
    return this.bookService.getBookById(id);
  }
  @Post()
  async createBook(
    @InjectToken() token: Token,
    @Body() book: Book
  ): Promise<Book> {
    return this.bookService.createBook(book, token);
  }
  // @Put(':id')
  // async updateBook(
  //   @InjectToken() token: Token,
  //   @Body() updatedBook: Book
  // ): Promise<Book> {
  //   return this.bookService.updateBook(updatedBook, token);
  // }
}
