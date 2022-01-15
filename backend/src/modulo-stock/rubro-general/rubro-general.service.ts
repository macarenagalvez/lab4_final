import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/services/base.service';
import { RubroGeneral } from './rubro-general.entity';
import { RubroGeneralRepository } from './rubro-general.repository';

@Injectable()
export class RubroGeneralService extends BaseService<RubroGeneral> {
  constructor(private readonly repository: RubroGeneralRepository) {
    super(repository);
  }
}
