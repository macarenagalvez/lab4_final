import { BaseService } from 'src/base/services/base.service';
import { DetallePedido } from './detalle-pedido.entity';
import { DetallePedidoRepository } from './detalle-pedido.repository';
export declare class DetallePedidoService extends BaseService<DetallePedido> {
    private readonly clienteRepository;
    constructor(clienteRepository: DetallePedidoRepository);
}
