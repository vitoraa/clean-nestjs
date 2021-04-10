import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { CreateShipDto } from './dto/create-ship.dto'
import { UpdateShipDto } from './dto/update-ship.dto'
import { Ship } from './entities/ship.entity'
import { ShipRepository } from './ship.repository'

@Injectable()
export class ShipService {
  constructor (
    @InjectRepository(ShipRepository)
    private shipRepository: ShipRepository,
  ) { }

  create (createShipDto: CreateShipDto): Promise<Ship> {
    return this.shipRepository.save(createShipDto)
  }

  findAll () {
    return this.shipRepository.find()
  }

  findOne (id: string) {
    return this.shipRepository.findOneOrFail(id)
  }

  async update (id: string, updateShipDto: UpdateShipDto): Promise<Ship> {
    let toUpdate = await this.shipRepository.findOneOrFail(id)
    let updated = Object.assign(toUpdate, updateShipDto)
    const ship = await this.shipRepository.save(updated);
    return ship
  }

  remove (id: string) {
    return this.shipRepository.delete(id)
  }
}
