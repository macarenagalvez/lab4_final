import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteModule } from './modulo-acceso/cliente/cliente.module';
import { DetalleFacturaModule } from './modulo-pedido/detalle-pedido/detalle-pedido.module';
import { FacturaModule } from './modulo-pedido/factura/factura.module';
import { PedidoModule } from './modulo-pedido/pedido/pedido.module';
import { ArticuloInsumoModule } from './modulo-stock/articulo-insumo/articulo-insumo.module';
import { ArticuloManufacturadoDetalleModule } from './modulo-stock/articulo-manufacturado-detalle/articulo-manufacturado-detalle.module';
import { ArticuloManufacturadoModule } from './modulo-stock/articulo-manufacturado/articulo-manufacturado.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ClienteModule,
    DetalleFacturaModule,
    FacturaModule,
    PedidoModule,
    ArticuloInsumoModule,
    ArticuloManufacturadoModule,
    ArticuloManufacturadoDetalleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
