import { BaseService } from 'src/base/services/base.service';
import { ArticuloInsumo } from './articulo-insumo.entity';
import { ArticuloInsumoRepository } from './articulo-insumo.repository';
export declare class ArticuloInsumoService extends BaseService<ArticuloInsumo> {
    private readonly repository;
    constructor(repository: ArticuloInsumoRepository);
}
