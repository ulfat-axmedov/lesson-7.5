import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post, PostDocument } from './schemas/post.schema';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}

  async create(dto: CreatePostDto) {
    return this.postModel.create(dto);
  }

  async findAll(page = 1, limit = 10) {
    return this.postModel.find({ isDeleted: false })
      .skip((page - 1) * limit)
      .limit(limit)
      .populate('author');
  }

  async findOne(id: string) {
    const post = await this.postModel.findById(id).populate('author');
    if (!post || post.isDeleted) throw new NotFoundException('Post not found');
    return post;
  }

  async update(id: string, dto: UpdatePostDto) {
    const post = await this.postModel.findByIdAndUpdate(id, dto, { new: true });
    if (!post) throw new NotFoundException('Post not found');
    return post;
  }

  async remove(id: string) {
    const post = await this.postModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    if (!post) throw new NotFoundException('Post not found');
    return post;
  }
}
