import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from '../../users/schemas/user.schema';

export type PostDocument = Post & Document;

@Schema({ timestamps: true })
export class Post {
  @Prop({ required: true })
  title: string;

  @Prop()
  content: string;

  @Prop({ type: Types.ObjectId, ref: User.name })
  author: Types.ObjectId;

  @Prop({ default: false })
  isDeleted: boolean;
}

export const PostSchema = SchemaFactory.createForClass(Post);
