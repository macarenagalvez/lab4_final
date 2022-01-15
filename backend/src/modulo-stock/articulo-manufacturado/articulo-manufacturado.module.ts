import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticuloManufacturadoController } from './articulo-manufacturado.controller';
import { ArticuloManufacturadoRepository } from './articulo-manufacturado.repository';
import { ArticuloManufacturadoService } from './articulo-manufacturado.service';

@Module({
  imports: [TypeOrmModule.forFeature([ArticuloManufacturadoRepository])],
  providers: [ArticuloManufacturadoService],
  controllers: [ArticuloManufacturadoController],
})
export class ArticuloManufacturadoModule {}
