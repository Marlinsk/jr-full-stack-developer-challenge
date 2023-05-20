import { Module } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { EmpresaController } from './empresa.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaRepository } from './repositories/implementations/prisma.repository';

@Module({
  imports: [PrismaModule],
  controllers: [EmpresaController],
  providers: [EmpresaService, PrismaRepository],
})
export class EmpresaModule {}
