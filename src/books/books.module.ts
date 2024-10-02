import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { BookState } from './entities/bookState.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { AppUser } from 'src/users/entities/user.entity';
import { UserState } from 'src/users/entities/userState.entity';
import { ReadBookService } from './readBook.service';


@Module({
  imports: [TypeOrmModule.forFeature([Book, BookState, AppUser, UserState])],
  controllers: [BooksController],
  providers: [BooksService, ReadBookService],
  exports: [BooksService],
})
export class BooksModule {}
