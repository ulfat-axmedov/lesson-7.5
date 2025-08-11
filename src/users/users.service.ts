import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(dto: CreateUserDto) {
    return this.userModel.create(dto);
  }

  async findAll(page = 1, limit = 10) {
    return this.userModel.find({ isDeleted: false })
      .skip((page - 1) * limit)
      .limit(limit);
  }

  async findOne(id: string) {
    const user = await this.userModel.findById(id);
    if (!user || user.isDeleted) throw new NotFoundException('User not found');
    return user;
  }

  async update(id: string, dto: UpdateUserDto) {
    const user = await this.userModel.findByIdAndUpdate(id, dto, { new: true });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async remove(id: string) {
    const user = await this.userModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }
}
