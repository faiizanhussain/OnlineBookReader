import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';
import { IsString, IsNotEmpty, IsUUID } from 'class-validator';
import { AppUser } from '../../users/entities/user.entity';

export class UpdateBookDto extends PartialType(CreateBookDto) {
    @IsString()
    @IsNotEmpty()
    title?: string;

    @IsUUID()
    @IsNotEmpty()
    userId?: AppUser;
}
