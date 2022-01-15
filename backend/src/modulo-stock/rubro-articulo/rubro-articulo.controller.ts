import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base/controllers/base.controller';
import { RubroArticulo } from './rubro-articulo.entity';
import { RubroArticuloService } from './rubro-articulo.service';

@Controller('/api/v1/rubro-articulo')
export class RubroArticuloController extends BaseController<RubroArticulo> {
    constructor(private readonly service: RubroArticuloService) {
      super(service);
    }
  }