import { IsString, IsNotEmpty, IsUUID } from 'class-validator';
import { AppUser } from '../../users/entities/user.entity';

export class CreateBookDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsUUID()
    @IsNotEmpty()
    userId: AppUser;

    @IsString()
    @IsNotEmpty()
    fileUrl: string;

    @IsString()
    @IsNotEmpty()
    authorId: AppUser;

    @IsString()
    @IsNotEmpty()
    fileContent: string;

}
