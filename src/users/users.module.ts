import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppUser } from './entities/user.entity';
import { Role } from './entities/role.entity';
import { UserState } from './entities/userState.entity';
// import { UserCollection } from './entities/userCollection.entity';


@Module({
  imports: [TypeOrmModule.forFeature([AppUser, Role, UserState])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
