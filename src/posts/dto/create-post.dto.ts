import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  title: string;

  @IsOptional()
  content?: string;

  @IsNotEmpty()
  author: string;
}
