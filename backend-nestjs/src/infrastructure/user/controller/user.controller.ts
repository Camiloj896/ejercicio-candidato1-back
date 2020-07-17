import { Controller, Post, Get, Put, Delete, Param, Res, Body, HttpStatus } from '@nestjs/common';
import UserDTO from '../../../domain/user/dto/user.dto';
import GetAllUsersUseCase from './../../../aplication/user/getallUsers.usecase';
import GetUserUseCase from './../../../aplication/user/getUser.usecase';
import CreateUserUseCase from './../../../aplication/user/createUser.usecase';
import UpdateUserUseCase from './../../../aplication/user/updateUser.usecase';
import DeleteUserUseCase from './../../../aplication/user/deleteUser.usecase';


@Controller('api/users')
export class UserController {
  
    constructor( 
        private getAllUsersUseCase: GetAllUsersUseCase,
        private getUserUseCase: GetUserUseCase,
        private createUserUseCase: CreateUserUseCase,
        private updateUserUseCase: UpdateUserUseCase,
        private deleteUserUseCase: DeleteUserUseCase,
    ) {}

    /**
   * @returns all `users` object containing the data.
   */
    @Get()
    async getAll(@Res() request): Promise<UserDTO[]> {    
        const users = await this.getAllUsersUseCase.handler();
        return request.status(HttpStatus.OK).json(users);
    }

    /**
     * @param {number} id
     * @returns a `user` object containing the data filtered by id.
     */
    @Get(':id')
    async get(@Res() request, @Param('id') id: number): Promise<UserDTO> {
        const user = await this.getUserUseCase.handler(id);
        return request.status(HttpStatus.OK).json(user);
    }

    /**
     * @param {object} userDTO
     * @returns a `user` object containing the data.
     */
    @Post()
    async create(@Res() request, @Body() userDto: UserDTO): Promise<UserDTO> {
        const user = await this.createUserUseCase.handler(userDto);
        return request.status(HttpStatus.CREATED).json(user);
    }

    /**
     * @param {number} id
     * @param {object} userDTO
     * @returns a `user` object containing the data and status code.
     */
    @Put(':id')
    async update(@Res() request, @Body() userDto: UserDTO, @Param('id') id: number): Promise<any> {
        const user = await this.updateUserUseCase.handler(id, userDto);
        return request.status(HttpStatus.OK).json(user);
    }

    /**
   * @param {number} id
   * @returns a `staus` code.
   */
    @Delete(':id')
    async delete(@Res() request, @Param('id') id: number): Promise<any> {
        const user = await this.deleteUserUseCase.handler(id);
        return request.status(HttpStatus.OK).json(user);
    }

}
