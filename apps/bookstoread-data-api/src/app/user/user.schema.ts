import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { v4 as uuid } from 'uuid';
import { Booklist, bookListSchema } from '../booklist/booklist.schema';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ default: uuid, index: true })
  id: string;
  @Prop({ default: 'John', required: true, unique: false })
  firstName: string;
  @Prop({ default: 'Doe', required: true })
  lastName: string;
  @Prop({ default: 'JohnDoe@mail.com', required: true })
  emailAddress: string;
  @Prop({ default: '12345678', required: false })
  phoneNumber: string;
  @Prop({ default: false, required: false })
  isStudent: boolean;
  @Prop({
    required: true,
    default: [],
  })
  roles: string[];
  @Prop({
    required: true,
    default: [],
    type: [bookListSchema],
  })
  bookLists: Booklist[];
}

export const UserSchema = SchemaFactory.createForClass(User);
