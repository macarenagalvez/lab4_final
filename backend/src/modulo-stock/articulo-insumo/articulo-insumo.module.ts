import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticuloInsumoController } from './articulo-insumo.controller';
import { ArticuloInsumoRepository } from './articulo-insumo.repository';
import { ArticuloInsumoService } from './articulo-insumo.service';

@Module({
  imports: [TypeOrmModule.forFeature([ArticuloInsumoRepository])],
  providers: [ArticuloInsumoService],
  controllers: [ArticuloInsumoController],
})
export class ArticuloInsumoModule {}
