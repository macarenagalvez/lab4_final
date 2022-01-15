import { BaseController } from 'src/base/controllers/base.controller';
import { Factura } from './factura.entity';
import { FacturaService } from './factura.service';
export declare class FacturaController extends BaseController<Factura> {
    private readonly service;
    constructor(service: FacturaService);
}
