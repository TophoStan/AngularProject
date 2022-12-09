import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Token } from '../auth/token.decorator';
import { User as UserModel, UserDocument } from '../user/user.schema';
import {
  BooklistDocument,
  Booklist as BooklistModel,
  Booklist,
} from './booklist.schema';
import { BookDocument, Book as BookModel } from '../book/book.schema';
import { IBookList } from '@schoolproject/data';

@Injectable()
export class BookListService {
  constructor(
    @InjectModel(BooklistModel.name)
    private booklistModel: Model<BooklistDocument>,
    @InjectModel(UserModel.name) private userModel: Model<UserDocument>
  ) {}

  async getAll(token: Token): Promise<BooklistModel[]> {
    console.log('GetAll');
    const user = await this.userModel.aggregate([{ $match: { id: token.id } }]);
    const actualUser = await this.userModel
      .findById(user)
      .populate('bookLists.books');
    console.log('Actualuser');

    console.log(actualUser);

    // .populate('bookLists.books');

    // console.log(user);
    console.log(user);

    return actualUser!.bookLists;
  }
  async getOneById(id: string, token: Token): Promise<BooklistModel> {
    const user = await this.userModel
      .findOne(
        { $match: { id: token.id }, 'bookLists.id': id },
        { 'bookLists.$': 1 }
      )
      .populate('bookLists.books');

    if (!user) {
      throw new HttpException(
        'Unable to acces a booklist that is not yours',
        HttpStatus.FORBIDDEN
      );
    }

    return user.bookLists[0];
  }
  async createBookList(
    token: Token,
    bookList: IBookList
  ): Promise<BooklistModel> {
    const user = await this.userModel.aggregate([{ $match: { id: token.id } }]);
    const actualUser = await this.userModel.findById(user);

    let newbookList;
    try {
      newbookList = new this.booklistModel({
        name: bookList.name,
        description: bookList.description,
      });
      actualUser?.bookLists.push(newbookList);
      actualUser?.save();
    } catch (error) {
      throw new HttpException(
        'Unable to create a booklist',
        HttpStatus.BAD_REQUEST
      );
    }
    return newbookList;
  }
  async updateOne(
    id: any,
    token: Token,
    updatedBookList: Booklist
  ): Promise<BooklistModel> {
    const user = await this.userModel.aggregate([{ $match: { id: token.id } }]);
    const actualUser = await this.userModel.findById(user);
    const result = await this.userModel.updateMany(
      { _id: actualUser?._id, 'bookLists.id': updatedBookList.id },
      {
        $set: {
          'bookLists.$.name': updatedBookList.name,
          'bookLists.$.description': updatedBookList.description,
        },
      }
    );

    try {
      actualUser?.save();
    } catch (error) {
      throw new HttpException(
        'Unable to create a booklist',
        HttpStatus.BAD_REQUEST
      );
    }
    return updatedBookList;
  }
}
