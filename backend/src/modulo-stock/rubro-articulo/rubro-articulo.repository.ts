import { Repository, EntityRepository } from 'typeorm';
import { RubroArticulo } from './rubro-articulo.entity';

@EntityRepository(RubroArticulo)
export class RubroArticuloRepository extends Repository<RubroArticulo> {}
