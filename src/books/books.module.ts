import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { BookState } from './entities/bookState.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { AppUser } from 'src/users/entities/user.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Book, BookState, AppUser])],
  controllers: [BooksController],
  providers: [BooksService],
  exports: [BooksService],
})
export class BooksModule {}
