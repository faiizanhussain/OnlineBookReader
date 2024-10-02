import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { UpdateBookStatusDto } from './dto/updateBookStatus.dto';
import { ReadBookService } from './readBook.service';
import { Request } from 'express';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService, private readonly readBookService: ReadBookService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Req() request: Request) {
    return this.booksService.findOne(id, request);
  }

  @Get(':id/read')
  readBook(@Param('id') id: string, @Req() request: Request) {
    return this.readBookService.readBook(id, request);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.booksService.remove(id);
  }

  @Post('/:id/status')
  updateStatus(@Param('id') bookId: string, @Body() updateBookStatusDto: UpdateBookStatusDto) {
    return this.booksService.updateStatus(bookId, updateBookStatusDto);
  }
}
