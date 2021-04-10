import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { typeOrmConfig } from './configs/typeorm.config'
import { ShipModule } from './ship/ship.module'
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), ShipModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
