import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { typeOrmConfig } from './configs/typeorm.config'
import { ShipModule } from './ship/ship.module'
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), ShipModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
