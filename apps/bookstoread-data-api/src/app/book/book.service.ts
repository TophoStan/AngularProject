import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Token } from '../auth/token.decorator';
import { User as UserModel, UserDocument } from '../user/user.schema';
import { Book as BookModel, BookDocument } from './book.schema';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(UserModel.name) private userModel: Model<UserDocument>,
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
  async createBook(book: BookModel, token: Token): Promise<BookModel> {
    const user = await this.userModel.findOne({ id: token.id });
    if (user?.roles.includes('admin')) {
      const newBook = await this.bookModel.create({
        title: book.title,
        summary: book.summary,
        rating: book.rating,
        price: book.price,
        imageUrl: book.imageUrl,
      });
      newBook.save();
      return newBook;
    }
    throw new HttpException(
      'Only admins are allowed to create new books',
      HttpStatus.FORBIDDEN
    );
  }
}
