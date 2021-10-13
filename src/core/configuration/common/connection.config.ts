import { ConnectionOptions } from 'typeorm';
import { buildConfig } from './classes';

const config: ConnectionOptions = buildConfig();

export { config as databaseConfig };
