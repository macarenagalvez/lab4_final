import { Repository, EntityRepository } from 'typeorm';
import { ArticuloInsumo } from './articulo-insumo.entity';

@EntityRepository(ArticuloInsumo)
export class ArticuloInsumoRepository extends Repository<ArticuloInsumo> {}
