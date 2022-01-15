import { BaseController } from 'src/base/controllers/base.controller';
import { DetallePedido } from './detalle-pedido.entity';
import { DetallePedidoService } from './detalle-pedido.service';
export declare class DetalleFacturaController extends BaseController<DetallePedido> {
    private readonly service;
    constructor(service: DetallePedidoService);
}
