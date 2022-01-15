import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticuloManufacturadoDetalleController } from './articulo-manufacturado-detalle.controller';
import { ArticuloManufacturadoDetalleRepository } from './articulo-manufacturado-detalle.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ArticuloManufacturadoDetalleRepository])],
  providers: [ArticuloManufacturadoDetalleModule],
  controllers: [ArticuloManufacturadoDetalleController],
})
export class ArticuloManufacturadoDetalleModule {}
