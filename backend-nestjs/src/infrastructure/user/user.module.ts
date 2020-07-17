import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import UserService from './../../domain/user/service/user.service';
import { UserRepository } from './../../domain/user/port/user.repository';

import GetAllUsersUseCase from './../../aplication/user/getallUsers.usecase';
import GetUserUseCase from './../../aplication/user/getUser.usecase';
import CreateUserUseCase from './../../aplication/user/createUser.usecase';
import UpdateUserUseCase from './../../aplication/user/updateUser.usecase';
import DeleteUserUseCase from './../../aplication/user/deleteUser.usecase';

import { UserController } from './controller/user.controller';
import { UserEntity } from './adapter/entity/user.entity';
import UserRepositoryImpl from './../user/adapter/repository/user.repository';

const repositoryUserProvider = {
  provide: UserRepository,
  useClass: UserRepositoryImpl,
};

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [
    GetAllUsersUseCase,
    GetUserUseCase,
    CreateUserUseCase,
    UpdateUserUseCase,
    DeleteUserUseCase,
    UserService,
    repositoryUserProvider
  ],
  controllers: [UserController],
  exports: []
})

export class UserModule {}
