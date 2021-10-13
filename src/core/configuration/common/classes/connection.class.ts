import { ConnectionOptions } from 'typeorm';
import { configService, ConfigService } from '../index';
import { DatabaseConfigKeys } from '../types';

const buildConfig = (
  config: ConfigService = configService,
): ConnectionOptions => {
  return {
    type: 'postgres',
    host: config.get<DatabaseConfigKeys>('DB_HOST'),
    port: +config.get<DatabaseConfigKeys>('DB_PORT'),
    username: config.get<DatabaseConfigKeys>('DB_USER'),
    password: config.get<DatabaseConfigKeys>('DB_PW'),
    database: config.get<DatabaseConfigKeys>('DB_NAME'),
    entities: [__dirname + '/../../../../**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/../../../database/migrations/**/*{.ts,.js}'],
    migrationsTableName: 'migrations',
    migrationsRun: false,
    synchronize: false,
    logging: true,
    logger: 'file',
    cli: {
      migrationsDir: 'src/database/migrations',
    },
  };
};

export { buildConfig };
