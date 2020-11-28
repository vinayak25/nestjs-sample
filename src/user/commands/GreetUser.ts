import { BaseCommand, Command, OptionInterface } from '@app/core';
import { Injectable } from '@nestjs/common';

@Injectable()
@Command('user:greet', { desc: 'Command to create a user' })
export class GreetUser extends BaseCommand {
  public async handle(): Promise<void> {
    // print success message
    this.success(
      `Hello there, enjoy building cool stuff using this boilerplate! 😁`,
    );

    this.table([
      { name: 'User 1', designation: 'Software Engineer L1' },
      { name: 'User 2', designation: 'Software Engineer L1' },
    ]);

    return;
  }

  public options(): Record<string, OptionInterface> {
    return {
      name: {
        desc: 'Name of the person to be greeted!',
        req: false,
      },
    };
  }
}
