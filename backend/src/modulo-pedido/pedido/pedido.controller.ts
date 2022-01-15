import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base/controllers/base.controller';
import { Pedido } from './pedido.entity';
import { PedidoService } from './pedido.service';

@Controller('api/v1/pedido')
export class PedidoController extends BaseController<Pedido> {
  constructor(private readonly service: PedidoService) {
    super(service);
  }
}
