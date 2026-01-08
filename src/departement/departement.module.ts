import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartementService } from './departement.service';
import { DepartementController } from './departement.controller';
import { Department } from './entities/departement.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Department])],
  controllers: [DepartementController],
  providers: [DepartementService],
  exports: [TypeOrmModule],
})
export class DepartementModule {}
