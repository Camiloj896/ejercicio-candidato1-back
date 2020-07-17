import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
require('dotenv').config();

export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.HOST,
    port: parseInt(process.env.PORT),
    username: process.env.USERNAME_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DATABASE,
    entities: [join(__dirname, './**/*.entity{.ts,.js}')],
    synchronize: true,
    cache: true,
    ssl: false
};