import { FacturaRepository } from './factura.repository';
import { Factura } from './factura.entity';
import { BaseService } from 'src/base/services/base.service';
export declare class FacturaService extends BaseService<Factura> {
    private readonly repository;
    constructor(repository: FacturaRepository);
}
