import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, {
  Decimal128,
  Document,
  HydratedDocument,
  Schema as MongooseSchema,
} from 'mongoose';
import { v4 as uuid } from 'uuid';

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book {
  @Prop({ default: uuid, index: true })
  id: string;
  @Prop({ default: 'Title', required: true, unique: false })
  title: string;
  @Prop({ default: '', required: false, unique: false })
  imageUrl: string;
  @Prop({ default: 'bla bla bla bla', required: true, unique: false })
  summary: string;
  @Prop({ default: '10', required: true, unique: false })
  rating: number;
  @Prop({ default: '4.99', required: true, unique: false })
  price: number;
}

export const bookSchema = SchemaFactory.createForClass(Book);
