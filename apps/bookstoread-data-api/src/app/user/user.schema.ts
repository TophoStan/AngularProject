import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { v4 as uuid } from 'uuid';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ default: uuid, index: true })
  id: string;

  @Prop({ default: 'test', required: true })
  lol: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
