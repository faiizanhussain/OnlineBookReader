import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';
import { UpdateBookStatusDto } from './dto/updateBookStatus.dto';
import { BookState } from './entities/bookState.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly booksRepository: Repository<Book>,
    @InjectRepository(BookState)
    private readonly bookStateRepository: Repository<BookState>,
  ) {}

  async create(createBookDto: CreateBookDto) {
    const book = new Book();
    book.title = createBookDto.title;
    book.fileUrl = createBookDto.fileUrl;
    book.author = createBookDto.authorId;
    return await this.booksRepository.save(book);
  }

  async findAll() {
    return await this.booksRepository.find();
  }

  async findOne(id: string) {
    return await this.booksRepository.findOne({ where: { id } });
  }

  async update(id: string, updateBookDto: UpdateBookDto) {
    return await this.booksRepository.update(id, updateBookDto);
  }

  async remove(id: string) {
    return await this.booksRepository.delete(id);
  }

  async updateStatus(id: string, updateBookStatusDto: UpdateBookStatusDto) {
    const book = await this.booksRepository.findOne({ where: { id } });
    console.log(book.id);
    const bookState = await this.bookStateRepository.findOne({ where: { id } });
    if (!bookState) {
      // if bookState not found, create a new one
      const newBookState = new BookState();
      newBookState.book = updateBookStatusDto.bookId;
      newBookState.user = updateBookStatusDto.userId;
      newBookState.readingStatus = updateBookStatusDto.status;
      return await this.bookStateRepository.save(newBookState);
    }
    
    Object.assign(bookState, updateBookStatusDto);
    return await this.bookStateRepository.save(bookState);
  }
}
