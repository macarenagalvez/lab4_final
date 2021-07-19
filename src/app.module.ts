import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteModule } from './modulo-acceso/cliente/cliente.module';

@Module({
  imports: [TypeOrmModule.forRoot(), ClienteModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
