import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book as BookModel, BookDocument } from './book.schema';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(BookModel.name) private bookModel: Model<BookDocument>
  ) {}

  async getAllBooks(): Promise<BookModel[]> {
    return await this.bookModel.find();
  }
  async getBookById(id: string): Promise<BookModel> {
    const book = await this.bookModel.find({ id: id['id'] });
    console.log(book);

    return book[0];
  }
}
