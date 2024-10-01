import { IsBoolean, IsNotEmpty, IsUUID, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';
import { Book } from '../entities/book.entity';
import { AppUser } from 'src/users/entities/user.entity';

export class UpdateBookStatusDto extends PartialType(CreateBookDto) {
    @IsUUID()
    @IsNotEmpty()
    bookId: Book;

    @IsUUID()
    @IsNotEmpty()
    readerId: AppUser;
    
    @IsBoolean()
    @IsNotEmpty()
    readingStatus: boolean;


    @IsString()
    @IsNotEmpty()
    lastReadCharacter: string;
}
