import { BaseService } from 'src/base/services/base.service';
import { ArticuloManufacturadoDetalle } from './articulo-manufacturado-detalle.entity';
import { ArticuloManufacturadoDetalleRepository } from './articulo-manufacturado-detalle.repository';
export declare class ArticuloManufacturadoDetalleService extends BaseService<ArticuloManufacturadoDetalle> {
    private readonly repository;
    constructor(repository: ArticuloManufacturadoDetalleRepository);
}
