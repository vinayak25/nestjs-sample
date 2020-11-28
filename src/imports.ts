import config from '@config/index';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from '@app/user';
import { CoreModule } from '@app/core';
import { DbModule } from '@app/_db';
import { QueueModule } from '@lib/queue';

export default [
  ConfigModule.forRoot({
    isGlobal: true,
    expandVariables: true,
    load: config,
  }),
  CoreModule,
  UserModule,
  DbModule,
  QueueModule.registerAsync({
    isGlobal: true,
    imports: [ConfigModule],
    useFactory: (config: ConfigService) => config.get('queue'),
    inject: [ConfigService],
  }),
];
