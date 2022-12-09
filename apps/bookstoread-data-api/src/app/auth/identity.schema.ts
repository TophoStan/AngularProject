import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
// import isEmail from 'validator/lib/isEmail';

export type IdentityDocument = Identity & Document;

@Schema()
export class Identity {
  @Prop({
    unique: false,
  })
  firstName: string;

  @Prop({ required: true })
  hash: string;

  @Prop({
    required: true,
    unique: true,
    // validate: {
    //   validator: isEmail,
    //   message: 'should be a valid email address',
    // },
  })
  emailAddress: string;
}

export const IdentitySchema = SchemaFactory.createForClass(Identity);
