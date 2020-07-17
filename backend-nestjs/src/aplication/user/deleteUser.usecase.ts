import { Injectable } from '@nestjs/common';
import UserDTO from './../../domain/user/dto/user.dto';
import UserService from './../../domain/user/service/user.service';

@Injectable()
export default class DeleteUserUseCase {

    constructor(private userSercive: UserService) {}

    /**
   * @param {number} id
   * @returns a `staus` code.
   */
    public async handler(id: number): Promise<any> {
        await this.userSercive.get(id);
        return await this.userSercive.delete(id);
    }

}