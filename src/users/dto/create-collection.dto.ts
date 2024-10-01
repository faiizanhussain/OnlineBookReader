import { IsString, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateCollectionDto {
    @IsString()
    @IsNotEmpty()
    collectionName: string;

    @IsUUID()
    @IsNotEmpty()
    userId: string;
}