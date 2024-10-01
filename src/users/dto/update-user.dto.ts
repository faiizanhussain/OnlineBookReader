import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsString, IsNotEmpty, IsUUID } from 'class-validator';
import { Role } from '../entities/role.entity';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsString()
    @IsNotEmpty()
    name?: string;

    // this is a reference to the role entity
    @IsUUID()
    @IsNotEmpty()
    roleId?: Role;
}
