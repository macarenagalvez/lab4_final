import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/services/base.service';
import { ClienteRepository } from './client.repository';
import { Cliente } from './cliente.entity';

@Injectable()
export class ClienteService extends BaseService<Cliente> {
  constructor(private readonly clienteRepository: ClienteRepository) {
    super(clienteRepository);
  }
}
