import { BaseService } from 'src/base/services/base.service';
import { Pedido } from './pedido.entity';
import { PedidoRepository } from './pedido.repository';
export declare class PedidoService extends BaseService<Pedido> {
    private readonly repository;
    constructor(repository: PedidoRepository);
}
