import UserDTO from '../dto/user.dto';

export abstract class UserRepository {

    /**
   * @returns all `users` object containing the data.
   */
   abstract async getAll(): Promise<UserDTO[]>;

    /**
   * @param {number} id
   * @returns a `user` object containing the data filtered by id.
   */
  abstract async get(id: number): Promise<UserDTO>;

    /**
   * @param {object} userDTO
   * @returns a `user` object containing the data.
   */
  abstract async create(user: UserDTO): Promise<UserDTO>;

    /**
   * @param {number} id
   * @param {object} userDTO
   * @returns a `user` object containing the data and status code.
   */
  abstract async update(id: number, user: UserDTO): Promise<any>;

    /**
   * @param {number} id
   * @returns a `staus` code.
   */
  abstract async delete(id: number): Promise<any>;
  
}