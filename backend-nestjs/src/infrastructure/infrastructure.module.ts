import { Module, Logger } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';


@Module({
  providers: [ Logger ],
  imports: [    
    DatabaseModule,
    UserModule
  ],
})
export class InfrastructureModule { }
