import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { v4 as uuid } from 'uuid';
import { Book } from '../book/book.schema';

export type BooklistDocument = HydratedDocument<Booklist>;

@Schema()
export class Booklist {
  @Prop({ default: uuid, index: true })
  id: string;
  @Prop({ default: 'Readinglist', required: true, unique: false })
  name: string;
  @Prop({ default: 'bla bla bla bla', required: true, unique: false })
  description: string;
  @Prop({
    default: [],
    type: [MongooseSchema.Types.ObjectId],
    ref: 'Book',
  })
  books: Book[];
}

export const bookListSchema = SchemaFactory.createForClass(Booklist);
