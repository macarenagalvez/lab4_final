import { BaseController } from 'src/base/controllers/base.controller';
import { Cliente } from './cliente.entity';
import { ClienteService } from './cliente.service';
export declare class ClienteController extends BaseController<Cliente> {
    private readonly clienteService;
    constructor(clienteService: ClienteService);
}
