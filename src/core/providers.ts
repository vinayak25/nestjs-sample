import { ListCommands, InitApplicationSetup } from './console';
import { RunQueueWorker } from './console/commands/RunQueueWorker';
import { DatabaseRepository } from './db';
import { EventExplorer } from './events';
import { BaseValidator, ExistsConstraint } from './validator';
import { IsUniqueConstraint } from './validator/decorators/isUnique';
import { IsValueFromConfigConstraint } from './validator/decorators/isValueFromConfig';

const providers = [
  // commands
  ListCommands,
  RunQueueWorker,
  InitApplicationSetup,

  // event explore
  EventExplorer,

  // custom base validator
  BaseValidator,

  // custom validator decorators
  IsUniqueConstraint,
  ExistsConstraint,
  IsValueFromConfigConstraint,
];

const getProviders = function (): any {
  return providers;
};

export { getProviders };
