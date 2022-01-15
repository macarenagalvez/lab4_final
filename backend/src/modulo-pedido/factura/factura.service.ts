import { Injectable } from '@nestjs/common';
import { FacturaRepository } from './factura.repository';
import { Factura } from './factura.entity';
import { BaseService } from 'src/base/services/base.service';

@Injectable()
export class FacturaService extends BaseService<Factura> {
  constructor(private readonly repository: FacturaRepository) {
    super(repository);
  }
}
