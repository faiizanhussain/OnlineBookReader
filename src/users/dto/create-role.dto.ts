import { IsString, IsNotEmpty, IsUUID } from 'class-validator';
import { Role } from '../entities/role.entity';

export class AddRoleDto {
    @IsUUID()
    @IsNotEmpty()
    id: string;

    @IsString()
    @IsNotEmpty()
    name: string;

}
