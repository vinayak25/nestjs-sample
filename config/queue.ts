import { registerAs } from '@nestjs/config';
import { QueueOptions } from '@lib/queue';

export default registerAs('queue', () => {
  return {
    default: 'sqs',
    connections: {
      sqs: {
        driver: 'sqs',
        apiVersion: '2012-11-05',
        profile: process.env.AWS_PROFILE,
        prefix: process.env.AWS_SQS_PREFIX,
        queue: process.env.AWS_SQS_QUEUE,
        suffix: '',
        region: process.env.AWS_REGION,
      },
    },
  } as QueueOptions;
});
