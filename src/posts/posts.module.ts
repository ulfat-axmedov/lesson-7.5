import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from './schemas/post.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }])],
  controllers: [PostsController],
  providers: [PostsService],        // ✅ service ro‘yxatga kiritilgan
  exports: [PostsService],          // ✅ boshqa modullar foydalanishi uchun export qilinadi
})
export class PostsModule {}
