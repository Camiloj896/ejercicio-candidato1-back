import { Injectable } from '@nestjs/common';
import UserDTO from './../../domain/user/dto/user.dto';
import UserService from './../../domain/user/service/user.service';

@Injectable()
export default class CreateUserUseCase {

    constructor(private userSercive: UserService) {}

    /**
   * @param {object} userDTO
   * @returns a `user` object containing the data.
   */
    public async handler(user: UserDTO): Promise<UserDTO> {
        return await this.userSercive.create(user);
    }

}