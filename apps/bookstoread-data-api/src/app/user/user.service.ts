import { Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { User as UserModel, UserDocument } from './user.schema';

import { User } from '@schoolproject/data';
import { Token } from '../auth/token.decorator';
import { Book as BookModel, BookDocument } from '../book/book.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserModel.name) private userModel: Model<UserDocument>,
    @InjectModel(BookModel.name) private bookModel: Model<BookDocument>
  ) {}

  async getAll(): Promise<UserModel[]> {
    return this.userModel
      .find(
        {},
        {
          // id: 1,
          // firstName: 1,
          // lastName: 1,
          // emailAdress: 1,
          // phoneNumber: 1,
          // isStudent: 1,
        }
      )
      .exec();
  }
  async getOne(userId: string): Promise<UserModel> {
    const pipelineUser = [{ $match: { id: Number(userId) } }];
    const users = await this.userModel.aggregate(pipelineUser);
    return users[0];
  }
  async getOneByUUID(userMongoId: string): Promise<UserModel> {
    const pipelineUser = [{ $match: { id: userMongoId } }];
    const users = await this.userModel.aggregate(pipelineUser);

    return users[0];
  }
  async updateOne(updatedUser: UserModel): Promise<UserModel> {
    const user = await this.userModel.find({ id: updatedUser.id });
    const output = await this.userModel.updateOne({ id: user[0].id }, [
      {
        $set: {
          firstName: updatedUser.firstName,
          lastName: updatedUser.lastName,
          phoneNumber: updatedUser.phoneNumber,
          isStudent: updatedUser.isStudent,
          roles: updatedUser.roles,
        },
      },
    ]);
    return user[0];
  }
  async AddBookToBooklistOfUser(
    userToUpdate: UserModel,
    body: any,
    token: Token
  ): Promise<UserModel> {
    const user = await this.userModel.find({ id: userToUpdate.id });
    const book = await this.bookModel.find({ id: body.bookId });

    const result = await this.userModel.updateMany(
      { _id: user[0]?._id, 'bookLists.id': body.booklistId },
      {
        $push: {
          'bookLists.$.books': book,
        },
      }
    );

    return user[0];
  }
  async removeBookFromBookListOfUser(
    userToUpdate: UserModel,
    body: any,
    token: Token
  ): Promise<UserModel> {
    console.log(body);

    const user = await this.userModel.find({ id: userToUpdate.id });
    const book = await this.bookModel.find({ id: body.bookId });
    console.log(book);
    console.log(user);
    console.log(body.booklistId);

    const result = await this.userModel.updateOne(
      { _id: user[0]?._id, 'bookLists.id': body.booklistId },
      {
        $pull: {
          'bookLists.$.books': book[0]._id,
          // bookLists: {
          //   books: {
          //     $elemMatch: { _id: book[0]._id },
          //   },
          // },
        },
      }
    );

    console.log(result);
    return user[0];
  }
  // async deleteOne(){

  // }
}
