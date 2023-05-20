import { Injectable } from '@nestjs/common';
import { CreateEmpresaDto } from '../../dtos/create-empresa.dto';
import { UpdateEmpresaDto } from '../../dtos/update-empresa.dto';
import { EmpresaEntity } from '../../entities/empresa.entity';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class PrismaRepository {
  constructor(private prisma: PrismaService) {}

  async create({
    name,
    street_name,
    addrees_number,
    neighborhood_name,
    city_name,
    state_name,
  }: CreateEmpresaDto): Promise<EmpresaEntity> {
    const newEmpresa = await this.prisma.empresa.create({
      data: {
        name,
        street_name,
        addrees_number,
        neighborhood_name,
        city_name,
        state_name,
      },
    });

    return newEmpresa;
  }

  async save(
    id: string,
    {
      name,
      street_name,
      addrees_number,
      neighborhood_name,
      city_name,
      state_name,
    }: UpdateEmpresaDto,
  ): Promise<EmpresaEntity> {
    const empresa = await this.prisma.empresa.update({
      where: { id },
      data: {
        name,
        street_name,
        addrees_number,
        neighborhood_name,
        city_name,
        state_name,
      },
    });

    return empresa;
  }

  async getAll(): Promise<EmpresaEntity[] | null> {
    const empresa = await this.prisma.empresa.findMany();

    if (!empresa) {
      return null;
    }

    return empresa;
  }

  async findById(id: string): Promise<EmpresaEntity | null> {
    const empresa = await this.prisma.empresa.findUnique({ where: { id } });

    if (!empresa) {
      return null;
    }

    return empresa;
  }

  async delete(id: string): Promise<void> {
    await this.prisma.empresa.delete({ where: { id } });
  }
}
