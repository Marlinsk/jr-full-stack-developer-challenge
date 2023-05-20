import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmpresaDto } from './dtos/create-empresa.dto';
import { UpdateEmpresaDto } from './dtos/update-empresa.dto';
import { PrismaRepository } from './repositories/implementations/prisma.repository';
import { EmpresaEntity } from './entities/empresa.entity';

@Injectable()
export class EmpresaService {
  constructor(private readonly repository: PrismaRepository) {}

  async create({
    name,
    street_name,
    addrees_number,
    neighborhood_name,
    city_name,
    state_name,
  }: CreateEmpresaDto): Promise<EmpresaEntity> {
    const data = await this.repository.create({
      name,
      street_name,
      addrees_number,
      neighborhood_name,
      city_name,
      state_name,
    });

    return data;
  }

  async findAll(): Promise<EmpresaEntity[] | null> {
    return await this.repository.getAll();
  }

  async findOne(id: string): Promise<EmpresaEntity | null> {
    const empresaExists = await this.repository.findById(id);

    if (!empresaExists) {
      throw new NotFoundException('Empresa não encontrada.');
    }

    return empresaExists;
  }

  async update(
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
    const empresaExists = await this.repository.findById(id);

    if (!empresaExists) {
      throw new NotFoundException('Empresa não encontrada.');
    }

    const data = await this.repository.save(id, {
      name,
      street_name,
      addrees_number,
      neighborhood_name,
      city_name,
      state_name,
    });

    return data;
  }

  async remove(id: string) {
    const empresaExists = await this.repository.findById(id);

    if (!empresaExists) {
      throw new NotFoundException('Empresa não encontrada.');
    }

    return await this.repository.delete(id);
  }
}
