import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacturaController } from './factura.controller';
import { FacturaRepository } from './factura.repository';
import { FacturaService } from './factura.service';

@Module({
  imports: [TypeOrmModule.forFeature([FacturaRepository])],
  providers: [FacturaService],
  controllers: [FacturaController],
})
export class FacturaModule {}
