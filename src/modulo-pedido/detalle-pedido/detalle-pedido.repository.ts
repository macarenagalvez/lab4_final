import { EntityRepository, Repository } from 'typeorm';
import { DetallePedido } from './detalle-pedido.entity';

@EntityRepository(DetallePedido)
export class DetallePedidoRepository extends Repository<DetallePedido> {}
