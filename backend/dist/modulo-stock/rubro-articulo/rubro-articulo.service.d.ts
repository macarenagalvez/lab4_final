import { BaseService } from 'src/base/services/base.service';
import { RubroArticulo } from './rubro-articulo.entity';
import { RubroArticuloRepository } from './rubro-articulo.repository';
export declare class RubroArticuloService extends BaseService<RubroArticulo> {
    private readonly repository;
    constructor(repository: RubroArticuloRepository);
}
