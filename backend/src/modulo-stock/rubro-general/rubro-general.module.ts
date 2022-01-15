import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RubroGeneralController } from './rubro-general.controller';
import { RubroGeneralRepository } from './rubro-general.repository';
import { RubroGeneralService } from './rubro-general.service';

@Module({
  imports: [TypeOrmModule.forFeature([RubroGeneralRepository])],
  providers: [RubroGeneralService],
  controllers: [RubroGeneralController],
})
export class RubroGeneralModule {}
