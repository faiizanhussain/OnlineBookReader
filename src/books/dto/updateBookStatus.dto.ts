import { IsBoolean, IsNotEmpty, IsUUID } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';
import { Book } from '../entities/book.entity';

export class UpdateBookStatusDto extends PartialType(CreateBookDto) {
    @IsUUID()
    @IsNotEmpty()
    bookId: Book;

    @IsBoolean()
    @IsNotEmpty()
    status: boolean;
}
