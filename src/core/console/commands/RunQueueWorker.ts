import { QueueListener } from '@lib/queue';
import { Injectable } from '@nestjs/common';
import { Command, BaseCommand, OptionInterface } from '..';

@Injectable()
@Command('queue:work', { desc: 'Command to listen to queue' })
export class RunQueueWorker extends BaseCommand {
  public async handle(): Promise<void> {
    const sleep = this.value<number>('sleep');
    const connection = this.value<string>('connection');
    const queue = this.value<string>('queue');
    const options = {};
    if (sleep) options['sleep'] = sleep;
    if (connection) options['connection'] = connection;
    if (queue) options['queue'] = queue;

    await QueueListener.init(options).run();

    return;
  }

  public options(): Record<string, OptionInterface> {
    return {
      sleep: { req: false },
      connection: { req: false },
      queue: { req: false },
    };
  }
}
