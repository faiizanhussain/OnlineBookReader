/* Here I want to implement the logic to read a book
 I want to use the bookState to keep track of the current page and the current character. We've already set some defaults for the userState. So, we'll use that.
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';
import { UserState } from '../users/entities/userState.entity';
import { BookState } from './entities/bookState.entity';
import { Request } from 'express';

@Injectable()
export class ReadBookService {
    constructor(@InjectRepository(Book) private readonly booksRepository: Repository<Book>, @InjectRepository(UserState) private readonly userStateRepository: Repository<UserState>, @InjectRepository(BookState) private readonly bookStateRepository: Repository<BookState>) {}

    async readBook(id: string, request: Request) {
        /*
    Fetch the book from the database and return the fileContent based on the userState & bookState
    */

    // Fetch the book from the database
    const book = await this.booksRepository.findOne({ where: { id } });
    console.log(book);

    // Fetch the readerId from the request header
    const readerId = request.headers['readerid'] as string;
    // console.log("ReaderId: " + readerId);
    
    // Fetch the userState from the database
    const userState = await this.userStateRepository.findOne({ where: { appUser: { id: readerId } } });
    // console.log(userState);

    // Fetch the bookState from the database
    const bookState = await this.bookStateRepository.findOne({ where: { book: { id }, user: { id: readerId } } });
    // console.log(bookState);

    // Calculate the contentLength
    const contentLength= userState.noOfCharactersPerLine * userState.noOfLinesPerPage;
    // console.log(typeof contentLength);

    // Calculate the startIndex
    const startIndex = parseInt(bookState.lastReadCharacter);
    // console.log(typeof startIndex);

    // Calculate the endIndex
    const endIndex = startIndex + contentLength;
    // console.log(typeof endIndex);

    // Fetch the fileContent from the database
    const fileContent = book.fileContent.slice(startIndex as number, endIndex as number);
        return fileContent;
    }
}
