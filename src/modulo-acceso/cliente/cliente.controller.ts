import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base/controllers/base.controller';
import { Cliente } from './cliente.entity';
import { ClienteService } from './cliente.service';

@Controller('cliente')
export class ClienteController extends BaseController<Cliente> {
  constructor(private readonly clienteService: ClienteService) {
    super(clienteService);
  }
}
