import { Controller, Post as HttpPost } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { PostsService } from '../posts/posts.service';

@Controller('seed')
export class SeedController {
  constructor(private usersService: UsersService, private postsService: PostsService) {}

  @HttpPost()
  async seed() {
    const user = await this.usersService.create({ name: 'Admin', email: 'admin@example.com' });
    const post = await this.postsService.create({
      title: 'Hello World',
      content: 'First post',
      author: String(user._id), 
    });
    
    return { user, post };
  }
}
