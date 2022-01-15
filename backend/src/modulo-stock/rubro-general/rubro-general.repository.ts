import { Repository, EntityRepository } from 'typeorm';
import { RubroGeneral } from './rubro-general.entity';

@EntityRepository(RubroGeneral)
export class RubroGeneralRepository extends Repository<RubroGeneral> {}
