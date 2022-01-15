import { Repository, EntityRepository } from 'typeorm';
import { ArticuloManufacturado } from './articulo-manufacturado.entity';

@EntityRepository(ArticuloManufacturado)
export class ArticuloManufacturadoRepository extends Repository<ArticuloManufacturado> {}
