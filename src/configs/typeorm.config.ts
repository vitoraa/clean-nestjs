import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'postgres',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'cleannestjs',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
}