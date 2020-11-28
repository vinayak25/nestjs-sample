import { Job } from '@lib/queue';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserJobs {
  @Job('SAMPLE_JOB', {})
  sampleMethod(data: Object) {
    console.log('data coming ===> ', data);
    throw new Error('Code fatt gya!!!');
  }
}
