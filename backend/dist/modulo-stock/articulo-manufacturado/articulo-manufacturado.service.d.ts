import { BaseService } from 'src/base/services/base.service';
import { ArticuloManufacturado } from './articulo-manufacturado.entity';
import { ArticuloManufacturadoRepository } from './articulo-manufacturado.repository';
export declare class ArticuloManufacturadoService extends BaseService<ArticuloManufacturado> {
    private readonly repository;
    constructor(repository: ArticuloManufacturadoRepository);
}
