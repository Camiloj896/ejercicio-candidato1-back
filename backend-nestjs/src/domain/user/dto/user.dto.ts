import { ApiProperty } from '@nestjs/swagger';

export default class UserDTO {

    @ApiProperty()
    id: number;

    @ApiProperty()
    firstname: string;

    @ApiProperty()
    lastname: string;
    
    @ApiProperty()
    email: string;

    @ApiProperty()
    country: string;
}
    