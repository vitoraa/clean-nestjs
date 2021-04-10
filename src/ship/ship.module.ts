import { Module } from '@nestjs/common'
import { ShipService } from './ship.service'
import { ShipController } from './ship.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ShipRepository } from './ship.repository'

@Module({
  controllers: [ShipController],
  providers: [ShipService],
  imports: [TypeOrmModule.forFeature([ShipRepository])],
})
export class ShipModule { }
