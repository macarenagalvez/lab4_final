import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base/controllers/base.controller';
import { Factura } from './factura.entity';
import { FacturaService } from './factura.service';

@Controller('api/v1/factura')
export class FacturaController extends BaseController<Factura> {
  constructor(private readonly service: FacturaService) {
    super(service);
  }
}
