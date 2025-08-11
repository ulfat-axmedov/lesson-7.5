import { Module } from '@nestjs/common';
import { SeedController } from './seed.controller';
import { UsersModule } from '../users/users.module';
import { PostsModule } from '../posts/posts.module';

@Module({
  imports: [UsersModule, PostsModule], // ✅ bu juda muhim
  controllers: [SeedController],
})
export class SeedModule {}
