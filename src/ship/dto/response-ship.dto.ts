import { PartialType } from '@nestjs/mapped-types'
import { Ship } from '../entities/ship.entity'

export class ResponseShipDto extends PartialType(Ship) { }