import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidoController } from './pedido.controller';
import { PedidoRepository } from './pedido.repository';
import { PedidoService } from './pedido.service';

@Module({
  imports: [TypeOrmModule.forFeature([PedidoRepository])],
  providers: [PedidoService],
  controllers: [PedidoController],
})
export class PedidoModule {}
