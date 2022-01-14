import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DomicilioController } from './domicilio.controller';
import { DomicilioRepository } from './domicilio.repository';
import { DomicilioService } from './domicilio.service';

@Module({
  imports: [TypeOrmModule.forFeature([DomicilioRepository])],
  providers: [DomicilioService],
  controllers: [DomicilioController],
})
export class DomicilioModule {}
