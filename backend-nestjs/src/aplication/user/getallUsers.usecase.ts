import { Injectable } from '@nestjs/common';
import UserDTO from './../../domain/user/dto/user.dto';
import UserService from './../../domain/user/service/user.service';

@Injectable()
export default class GetAllUsersUseCase {

    constructor(private userSercive: UserService) {}

    /**
   * @returns all `users` object containing the data.
   */
    public async handler(): Promise<UserDTO[]> {
        return await this.userSercive.getAll();
    }

}