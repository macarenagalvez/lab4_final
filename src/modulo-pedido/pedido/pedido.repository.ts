import { Repository, EntityRepository } from 'typeorm';
import { Pedido } from './pedido.entity';

@EntityRepository(Pedido)
export class PedidoRepository extends Repository<Pedido> {}
