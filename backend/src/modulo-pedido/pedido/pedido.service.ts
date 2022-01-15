import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/services/base.service';
import { Pedido } from './pedido.entity';
import { PedidoRepository } from './pedido.repository';

@Injectable()
export class PedidoService extends BaseService<Pedido> {
  constructor(private readonly repository: PedidoRepository) {
    super(repository);
  }
}
