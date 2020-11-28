import { Module, HttpModule } from '@nestjs/common';
import { UserController } from './controllers';
import { UserService } from './services';
import { USER_REPOSITORY } from './constants';
import { UserRepository } from './repositories';
import { GreetUser } from './commands';
import { UserJobs } from './jobs/User';

@Module({
  imports: [HttpModule],
  controllers: [UserController],
  providers: [
    UserService,
    GreetUser,
    UserJobs,
    { provide: USER_REPOSITORY, useClass: UserRepository },
  ],
})
export class UserModule {}
