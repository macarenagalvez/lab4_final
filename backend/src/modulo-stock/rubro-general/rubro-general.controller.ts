import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base/controllers/base.controller';
import { RubroGeneral } from './rubro-general.entity';
import { RubroGeneralService } from './rubro-general.service';

@Controller('/api/v1/rubro-general')
export class RubroGeneralController extends BaseController<RubroGeneral> {
    constructor(private readonly service: RubroGeneralService) {
      super(service);
    }
  }