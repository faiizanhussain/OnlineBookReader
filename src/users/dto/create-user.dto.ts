import { IsString, IsNotEmpty, IsUUID } from 'class-validator';
import { Role } from '../entities/role.entity';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    // this is a reference to the role entity
    @IsUUID()
    @IsNotEmpty()
    roleId: Role;

}
