import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/services/base.service';
import { Domicilio } from './domicilio.entity';
import { DomicilioRepository } from './domicilio.repository';

@Injectable()
export class DomicilioService extends BaseService<Domicilio> {
  constructor(private readonly clienteRepository: DomicilioRepository) {
    super(clienteRepository);
  }
}
