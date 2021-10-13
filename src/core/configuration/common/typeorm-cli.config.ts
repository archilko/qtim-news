import { ConnectionOptions } from 'typeorm';
import { DatabaseConfigKeys } from './types';
import { configService } from './services';

const typeormCliConfig: ConnectionOptions = {
  type: 'postgres',
  host: configService.get<DatabaseConfigKeys>('DB_HOST'),
  port: parseInt(configService.get<DatabaseConfigKeys>('DB_PORT')),
  username: configService.get<DatabaseConfigKeys>('DB_USER'),
  password: configService.get<DatabaseConfigKeys>('DB_PW'),
  database: configService.get<DatabaseConfigKeys>('DB_NAME'),
  entities: [__dirname + '/../../../**/*.entity{.ts,.js}'],
  migrations: ['src/database/migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations',
  migrationsRun: false,
  synchronize: false,
  logging: true,
  logger: 'file',
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};

export = typeormCliConfig;
