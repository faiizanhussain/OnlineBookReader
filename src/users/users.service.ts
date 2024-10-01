import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AppUser } from './entities/user.entity';
import { Role } from './entities/role.entity';
import { AddRoleDto } from './dto/create-role.dto';
// import { UserCollection } from './entities/userCollection.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(AppUser)
    private readonly usersRepository: Repository<AppUser>,
    @InjectRepository(Role)
    private readonly rolesRepository: Repository<Role>,
  ) {
    console.log('services initialized');
  }

  create(createUserDto: CreateUserDto) {
    const user = new AppUser();
    user.username = createUserDto.username;
    user.password = createUserDto.password;
    user.role = createUserDto.roleId;
    return this.usersRepository.save(user);
  }

  addRole(addRoleDto: AddRoleDto) {
    const role = new Role();
    role.name = addRoleDto.name;
    return this.rolesRepository.save(role);
  }


  // createCollection(userId) {
  //   const collection = new UserCollection();
  //   collection.userId = userId;
  //   return this.usersRepository.save(collection);
  // }

  // getCollection(id: string) {
  //   return this.usersRepository.findOne({ where: { id }, relations: ['collection'] });
  // }
}
