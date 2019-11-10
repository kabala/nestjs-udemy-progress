import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'postgres',
  password: ' ',
  database: 'taskmanagement',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,

  // migrationsRun: true,
  // logging: true,
  // logger: 'file',
  // // migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  // cli: {
  //   // Location of migration should be inside src folder
  //   // to be compiled into dist/ folder.
  //   migrationsDir: 'src/migrations',
  // }
};
