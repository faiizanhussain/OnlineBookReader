import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AddRoleDto } from './dto/create-role.dto';
import { CreateCollectionDto } from './dto/create-collection.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/add-user')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Post('/add-role')
  addRole(@Body() addRoleDto: AddRoleDto) {
    return this.usersService.addRole(addRoleDto);
  }

  // @Get('/:id/collection')
  // getCollection(@Param('id') id: string) {
  //   return this.usersService.getCollection(id);
  // }

  // @Post('/create-collection')
  // createCollection(@Body() createCollectionDto: CreateCollectionDto) {
  //   // console.log(createCollectionDto.userId);
  //   return this.usersService.createCollection(createCollectionDto.userId);
  // }
}
