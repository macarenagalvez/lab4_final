import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/services/base.service';
import { DetallePedido } from './detalle-pedido.entity';
import { DetallePedidoRepository } from './detalle-pedido.repository';

@Injectable()
export class DetallePedidoService extends BaseService<DetallePedido> {
  constructor(private readonly clienteRepository: DetallePedidoRepository) {
    super(clienteRepository);
  }
}
