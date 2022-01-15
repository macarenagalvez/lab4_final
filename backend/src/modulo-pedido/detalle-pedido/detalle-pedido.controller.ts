import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base/controllers/base.controller';
import { DetallePedido } from './detalle-pedido.entity';
import { DetallePedidoService } from './detalle-pedido.service';

@Controller('api/v1/detalle-pedido')
export class DetalleFacturaController extends BaseController<DetallePedido> {
  constructor(private readonly service: DetallePedidoService) {
    super(service);
  }
}
