import { Injectable } from '@nestjs/common';
import UserDTO from './../../domain/user/dto/user.dto';
import UserService from './../../domain/user/service/user.service';

@Injectable()
export default class UpdateUserUseCase {

    constructor(private userSercive: UserService) {}

    /**
   * @param {number} id
   * @param {object} userDTO
   * @returns a `user` object containing the data and status code.
   */
    public async handler(id: number, user: UserDTO): Promise<any> {
        await this.userSercive.get(id);
        return await this.userSercive.update(id, user);
    }

}