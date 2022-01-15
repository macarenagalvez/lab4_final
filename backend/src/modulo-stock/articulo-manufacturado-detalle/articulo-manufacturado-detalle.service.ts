import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/services/base.service';
import { ArticuloManufacturadoDetalle } from './articulo-manufacturado-detalle.entity';
import { ArticuloManufacturadoDetalleRepository } from './articulo-manufacturado-detalle.repository';

@Injectable()
export class ArticuloManufacturadoDetalleService extends BaseService<ArticuloManufacturadoDetalle> {
  constructor(
    private readonly repository: ArticuloManufacturadoDetalleRepository,
  ) {
    super(repository);
  }
}
