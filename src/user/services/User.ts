import { Injectable, Inject, HttpService } from '@nestjs/common';
import { UserRepositoryContract } from '../repositories';
import { USER_REPOSITORY } from '../constants';
import { EventListener } from '@app/core/events';
import { UserSignedUp } from '../events/UserSignedUp';
import { InjectRepository, RepositoryContract } from '@app/core';
import { User } from '../models';

@Injectable()
export class UserService {
  @InjectRepository(User) private repo: RepositoryContract;

  constructor(
    @Inject(USER_REPOSITORY) private users: UserRepositoryContract,
    private http: HttpService,
  ) {}

  async get(): Promise<Record<string, any>> {
    console.log(this.users);
    console.log(this.repo);
    return this.users.firstWhere({});
  }

  getByToken(bearer: any): any {
    throw new Error('Method not implemented.');
  }

  @EventListener('USER_SIGNED_UP')
  userSignedUp(event: UserSignedUp): void {
    console.log('EVENT RECEIVED ===>', event);
    // add your logic here
    return;
  }
}
