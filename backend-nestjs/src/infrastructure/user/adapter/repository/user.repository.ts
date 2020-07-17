import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './../entity/user.entity';
import { UserRepository } from './../../../../domain/user/port/user.repository';
import UserDTO from './../../../../domain/user/dto/user.dto';
import UserMapper from './../../mapper/user.mapper';

import { CatchError } from '../../../../domain/exceptions/catch-error';
import { DataMissing } from '../../../../domain/exceptions/data-missing';

@Injectable()
export default class UserRepositoryImpl implements UserRepository {

    constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>){}

    /**
   * @returns all `users` object containing the data.
   */
    async getAll(): Promise<UserEntity[]> {
        
        try {

            const users = await this.userRepository.find();    
            return UserMapper.toDomains(users);
            
        } catch (error) {
            
            throw new CatchError(
                error.message,
            );

        }


    }
    
    /**
   * @param {number} id
   * @returns a `user` object containing the data filtered by id.
   */
    async get(id: number): Promise<UserEntity> {
        
        try {

            const user = await this.userRepository.findOne(id);
            
            if (user === undefined) {
                throw new DataMissing(
                  `El usuario ${id} no existe`,
                );
            }

            return UserMapper.toDomain(user);
            
        } catch (error) {
            
            throw new CatchError(
                error.message,
            );

        }

    }

    /**
   * @param {object} userDTO
   * @returns a `user` object containing the data.
   */
    async create(userDto: UserDTO): Promise<UserEntity> {    
        
        try {

            const user = await this.userRepository.save(userDto);
            return UserMapper.toDomain(user);
            
        } catch (error) {
            
            throw new CatchError(
                error.message,
            );

        }

    }

    /**
   * @param {number} id
   * @param {object} userDTO
   * @returns a `user` object containing the data and status code.
   */
    async update(id: number, userDto: UserDTO): Promise<any> {
        
        try {

            await this.userRepository.update(id, userDto);

            const User = await this.userRepository.findOne(id);
    
            const res = {
                statusCode: 201,            
                message: 'El usuario se actualizó correctamente',
                data: User
            };
    
            return res;
            
        } catch (error) {
            
            throw new CatchError(
                error.message,
            );

        }


    }

    /**
   * @param {number} id
   * @returns a `staus` code.
   */
    async delete(id: number): Promise<any> {

        try {
            
            await this.userRepository.delete(id);
    
            const res = {
                statusCode: 200,            
                message: 'El usuario se elimino correctamente'
            };
    
            return res;

        } catch (error) {
            
            throw new CatchError(
                error.message,
            );

        }

    }

}

