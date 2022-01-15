import { BaseService } from 'src/base/services/base.service';
import { RubroGeneral } from './rubro-general.entity';
import { RubroGeneralRepository } from './rubro-general.repository';
export declare class RubroGeneralService extends BaseService<RubroGeneral> {
    private readonly repository;
    constructor(repository: RubroGeneralRepository);
}
