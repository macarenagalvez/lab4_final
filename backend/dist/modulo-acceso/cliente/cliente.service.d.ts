import { BaseService } from 'src/base/services/base.service';
import { ClienteRepository } from './client.repository';
import { Cliente } from './cliente.entity';
export declare class ClienteService extends BaseService<Cliente> {
    private readonly clienteRepository;
    constructor(clienteRepository: ClienteRepository);
}
