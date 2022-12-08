import { Controller, Get, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
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
}
