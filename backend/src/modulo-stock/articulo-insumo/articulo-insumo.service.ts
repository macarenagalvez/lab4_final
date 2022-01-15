import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/services/base.service';
import { ArticuloInsumo } from './articulo-insumo.entity';
import { ArticuloInsumoRepository } from './articulo-insumo.repository';

@Injectable()
export class ArticuloInsumoService extends BaseService<ArticuloInsumo> {
  constructor(private readonly repository: ArticuloInsumoRepository) {
    super(repository);
  }
}
