import { BaseController } from 'src/base/controllers/base.controller';
import { Pedido } from './pedido.entity';
import { PedidoService } from './pedido.service';
export declare class PedidoController extends BaseController<Pedido> {
    private readonly service;
    constructor(service: PedidoService);
}
