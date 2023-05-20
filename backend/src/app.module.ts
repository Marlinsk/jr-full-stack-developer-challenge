import { Module } from '@nestjs/common';
import { PrismaModule } from './modules/prisma/prisma.module';
import { EmpresaModule } from './modules/empresa/empresa.module';

@Module({
  imports: [EmpresaModule, PrismaModule],
})
export class AppModule {}
