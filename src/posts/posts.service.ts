import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  findAll() {
    return [
      {
        id: 1,
        title: 'Deep Dive into NestJS',
        content: 'A comprehensive guide to understanding NestJS',
      },
      {
        id: 2,
        title: 'Clean Architecture in Node.js',
        content:
          'Learn how to apply clean architecture principles in your Node.js applications',
      },
    ];
  }
}
