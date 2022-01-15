import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { ClienteRepository } from './client.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ClienteRepository])],
  providers: [ClienteService],
  controllers: [ClienteController],
})
export class ClienteModule {}
