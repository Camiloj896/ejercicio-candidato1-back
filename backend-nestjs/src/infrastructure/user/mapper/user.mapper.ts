import UserDTO from './../../../domain/user/dto/user.dto';
import { UserEntity } from './../adapter/entity/user.entity';

export default class UserMapper {

    public static toDomain(userEntity: UserEntity): UserDTO {
        
        const user = new UserDTO();

        user.id = userEntity.id;
        user.firstname = userEntity.firstname;
        user.lastname = userEntity.lastname;
        user.email = userEntity.email;
        user.country = userEntity.country;
        
        return user;

    }
   
    public static toDomains(userEntity: UserEntity[]): UserDTO[] {
        const users = new Array<UserDTO>();
        userEntity.forEach( (userEntity) => {
            const user = this.toDomain(userEntity);
            users.push(user);
        });
        return users;
    }

}