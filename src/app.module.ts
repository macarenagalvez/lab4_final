import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteModule } from './modulo-acceso/cliente/cliente.module';
import { DetalleFacturaModule } from './modulo-pedido/detalle-pedido/detalle-pedido.module';
import { FacturaModule } from './modulo-pedido/factura/factura.module';
import { PedidoModule } from './modulo-pedido/pedido/pedido.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ClienteModule,
    DetalleFacturaModule,
    FacturaModule,
    PedidoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
