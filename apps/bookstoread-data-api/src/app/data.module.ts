import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserService } from './user/user.service';

import { User, UserSchema } from './user/user.schema';
import { UserController } from './user/user.controller';
import { BookListController } from './booklist/booklist.controller';
import { BookListService } from './booklist/booklist.service';
import { Book, bookSchema } from './book/book.schema';
import { Booklist, bookListSchema } from './booklist/booklist.schema';
import { BookController } from './book/book.controller';
import { BookService } from './book/book.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Book.name, schema: bookSchema }]),
    MongooseModule.forFeature([
      { name: Booklist.name, schema: bookListSchema },
    ]),
  ],
  controllers: [UserController, BookListController, BookController],
  providers: [UserService, BookListService, BookService],
})
export class DataModule {}
