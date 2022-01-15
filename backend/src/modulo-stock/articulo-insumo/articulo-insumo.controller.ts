import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base/controllers/base.controller';
import { ArticuloInsumo } from './articulo-insumo.entity';
import { ArticuloInsumoService } from './articulo-insumo.service';

@Controller('/api/v1/articulo-insumo')
export class ArticuloInsumoController extends BaseController<ArticuloInsumo> {
    constructor(private readonly service: ArticuloInsumoService) {
      super(service);
    }
  }
