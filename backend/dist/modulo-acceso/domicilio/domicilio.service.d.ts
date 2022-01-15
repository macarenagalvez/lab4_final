import { BaseService } from 'src/base/services/base.service';
import { Domicilio } from './domicilio.entity';
import { DomicilioRepository } from './domicilio.repository';
export declare class DomicilioService extends BaseService<Domicilio> {
    private readonly clienteRepository;
    constructor(clienteRepository: DomicilioRepository);
}
