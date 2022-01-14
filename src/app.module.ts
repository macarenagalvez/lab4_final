import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteModule } from './modulo-acceso/cliente/cliente.module';
import { DomicilioModule } from './modulo-acceso/domicilio/domicilio.module';

@Module({
  imports: [TypeOrmModule.forRoot(), ClienteModule, DomicilioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
