import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/services/base.service';
import { ArticuloManufacturado } from './articulo-manufacturado.entity';
import { ArticuloManufacturadoRepository } from './articulo-manufacturado.repository';

@Injectable()
export class ArticuloManufacturadoService extends BaseService<ArticuloManufacturado> {
  constructor(private readonly repository: ArticuloManufacturadoRepository) {
    super(repository);
  }
}
