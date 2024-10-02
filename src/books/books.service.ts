import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';
import { UpdateBookStatusDto } from './dto/updateBookStatus.dto';
import { BookState } from './entities/bookState.entity';
import { AppUser } from 'src/users/entities/user.entity';
import { UserState } from 'src/users/entities/userState.entity';
import { Request } from 'express';
import { request } from 'http';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(AppUser)
    private readonly usersRepository: Repository<AppUser>,
    @InjectRepository(Book)
    private readonly booksRepository: Repository<Book>,
    @InjectRepository(BookState)
    private readonly bookStateRepository: Repository<BookState>,
    @InjectRepository(UserState)
    private readonly userStateRepository: Repository<UserState>,
  ) {}

  async create(createBookDto: CreateBookDto) {
    const book = new Book();
    book.title = createBookDto.title;
    book.author = createBookDto.authorId;
    book.fileContent = createBookDto.fileContent;
    return await this.booksRepository.save(book);
  }

  async findAll() {
    return await this.booksRepository.find();
  }

  async findOne(id: string, request: Request) {
    return await this.booksRepository.findOne({ where: { id } });
  }

  async update(id: string, updateBookDto: UpdateBookDto) {
    return await this.booksRepository.update(id, updateBookDto);
  }

  async remove(id: string) {
    return await this.booksRepository.delete(id);
  }

  async updateStatus(id: string, updateBookStatusDto: UpdateBookStatusDto) {
  //  Post bookState
  /*
   While we've both approaches i.e. Patching & Posting, We use the approach to post the bookState to the database to track the reading behavior of the user.
   This will help us to track the progress of the user for a particular book.
  */
  const bookState = new BookState();
  bookState.book = await this.booksRepository.findOne({ where: { id } });
  bookState.user = await this.usersRepository.findOne({ where: { id: updateBookStatusDto.readerId.id } });
  bookState.readingStatus = updateBookStatusDto.readingStatus;
  bookState.lastReadCharacter = updateBookStatusDto.lastReadCharacter;
  return await this.bookStateRepository.save(bookState);
  }
}
