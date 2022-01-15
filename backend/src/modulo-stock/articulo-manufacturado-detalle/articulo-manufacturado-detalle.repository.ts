import { Repository, EntityRepository } from 'typeorm';
import { ArticuloManufacturadoDetalle } from './articulo-manufacturado-detalle.entity';

@EntityRepository(ArticuloManufacturadoDetalle)
export class ArticuloManufacturadoDetalleRepository extends Repository<ArticuloManufacturadoDetalle> {}
