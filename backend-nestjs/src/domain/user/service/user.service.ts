import { Injectable } from '@nestjs/common';
import UserDTO from './../dto/user.dto';

import { UserRepository } from './../port/user.repository';
import { FieldRequiredJson } from './user.fieldrequired';

import { FieldRequire } from './../../exceptions/field-required';
import { EmailValidateError } from './../../exceptions/email-validate';

const EMAIL = new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z])$');

@Injectable()
export default class UserService { 

    constructor(private userRepository: UserRepository) {}

    /**
   * @returns all `users` object containing the data.
   */
    async getAll(): Promise<UserDTO[]> {  
        const users = await this.userRepository.getAll();
        console.log(users);        
        return users;
    }
    
    /**
   * @param {number} id
   * @returns a `user` object containing the data filtered by id.
   */
    async get(id: number): Promise<UserDTO> {
        const user = await this.userRepository.get(id);
        console.log(user);
        return user;
    }

    /**
   * @param {object} userDTO
   * @returns a `user` object containing the data.
   */
    async create(userDto: UserDTO): Promise<UserDTO> {

        for (const key in FieldRequiredJson) {
            if (!userDto.hasOwnProperty(key)) {
                throw new FieldRequire(
                    `El campo \'${key}\' es obligatorio`,
                );
            }
        }
        
        if (!EMAIL.test(userDto.email)) {
            throw new EmailValidateError(
                'El campo  \'correo\' no es valido, por favor verifique',
              );
        }

        const user = await this.userRepository.create(userDto);
        return user;

    }

    /**
   * @param {number} id
   * @param {object} userDTO
   * @returns a `user` object containing the data and status code.
   */
    async update(id: number, userDto: UserDTO): Promise<any> {     

        for (const key in FieldRequiredJson) {
            if (!userDto.hasOwnProperty(key)) {
                throw new FieldRequire(
                    `El campo \'${key}\' es obligatorio`,
                );
            }
        }
        
        if (!EMAIL.test(userDto.email)) {
            throw new EmailValidateError(
                'El campo  \'correo\' no es valido, por favor verifique',
              );
        }

        const user = await this.userRepository.update(id, userDto);
        return user;

    }

    /**
   * @param {number} id
   * @returns a `staus` code.
   */
    async delete(id: number): Promise<any> {
        const user = await this.userRepository.delete(id);
        return user;
    }

}