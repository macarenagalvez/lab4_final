import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/services/base.service';
import { RubroArticulo } from './rubro-articulo.entity';
import { RubroArticuloRepository } from './rubro-articulo.repository';

@Injectable()
export class RubroArticuloService extends BaseService<RubroArticulo> {
  constructor(private readonly repository: RubroArticuloRepository) {
    super(repository);
  }
}
