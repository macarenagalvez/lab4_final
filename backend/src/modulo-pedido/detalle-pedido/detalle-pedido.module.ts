import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetalleFacturaController } from './detalle-pedido.controller';
import { DetallePedidoRepository } from './detalle-pedido.repository';
import { DetallePedidoService } from './detalle-pedido.service';

@Module({
  imports: [TypeOrmModule.forFeature([DetallePedidoRepository])],
  providers: [DetallePedidoService],
  controllers: [DetalleFacturaController],
})
export class DetalleFacturaModule {}
