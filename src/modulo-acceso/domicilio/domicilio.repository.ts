import { EntityRepository, Repository } from 'typeorm';
import { Domicilio } from './domicilio.entity';

@EntityRepository(Domicilio)
export class ClienteRepository extends Repository<Domicilio> {}
