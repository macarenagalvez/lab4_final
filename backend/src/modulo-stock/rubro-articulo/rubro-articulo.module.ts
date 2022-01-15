import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RubroArticuloController } from './rubro-articulo.controller';
import { RubroArticuloRepository } from './rubro-articulo.repository';
import { RubroArticuloService } from './rubro-articulo.service';

@Module({
  imports: [TypeOrmModule.forFeature([RubroArticuloRepository])],
  providers: [RubroArticuloService],
  controllers: [RubroArticuloController],
})
export class RubroArticuloModule {}
