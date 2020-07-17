import { Injectable } from '@nestjs/common';
import UserDTO from './../../domain/user/dto/user.dto';
import UserService from './../../domain/user/service/user.service';

@Injectable()
export default class GetUserUseCase {

    constructor(private userSercive: UserService) {}

    /**
   * @param {number} id
   * @returns a `user` object containing the data filtered by id.
   */
    public async handler(id: number): Promise<UserDTO> {
        return await this.userSercive.get(id);
    }

}