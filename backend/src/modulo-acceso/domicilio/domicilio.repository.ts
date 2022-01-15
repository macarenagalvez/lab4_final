import { EntityRepository, Repository } from 'typeorm';
import { Domicilio } from './domicilio.entity';

@EntityRepository(Domicilio)
export class DomicilioRepository extends Repository<Domicilio> {}
