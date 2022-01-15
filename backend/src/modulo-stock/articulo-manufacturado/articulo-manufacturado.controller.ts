import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base/controllers/base.controller';
import { ArticuloManufacturado } from './articulo-manufacturado.entity';
import { ArticuloManufacturadoService } from './articulo-manufacturado.service';

@Controller('/api/v1/articulo-manufacturado')
export class ArticuloManufacturadoController extends BaseController<ArticuloManufacturado> {
    constructor(private readonly service: ArticuloManufacturadoService) {
      super(service);
    }
  }
