import { Controller, Get } from '@nestjs/common';

@Controller('book')
export class BookController {
  @Get()
  async getBooks() {
    return 'hello world';
  }
}
