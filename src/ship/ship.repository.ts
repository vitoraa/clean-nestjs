import { EntityRepository, Repository } from 'typeorm';
import { Ship } from './entities/ship.entity';

@EntityRepository(Ship)
export class ShipRepository extends Repository<Ship> { }