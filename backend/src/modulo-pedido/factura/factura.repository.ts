import { EntityRepository, Repository } from 'typeorm';
import { Factura } from './factura.entity';

@EntityRepository(Factura)
export class FacturaRepository extends Repository<Factura> {}
