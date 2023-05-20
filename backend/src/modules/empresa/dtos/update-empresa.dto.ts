import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateEmpresaDto {
  @ApiProperty({
    type: String,
    description: 'Nome da empresa',
    default: 'Black Ro',
  })
  @IsNotEmpty({ message: 'name must be not empty' })
  @IsString()
  name?: string;

  @ApiProperty({
    type: String,
    description: 'Nome da rua',
    default: 'Av. Brasil',
  })
  @IsString()
  street_name?: string;

  @ApiProperty({
    type: String,
    description: 'Número',
    default: '67B',
  })
  @IsString()
  addrees_number?: string;

  @ApiProperty({
    type: String,
    description: 'Nome do bairro',
    default: 'Funcionários',
  })
  @IsString()
  neighborhood_name?: string;

  @ApiProperty({
    type: String,
    description: 'Nome da cidade',
    default: 'Belo Horizonte',
  })
  @IsString()
  city_name?: string;

  @ApiProperty({
    type: String,
    description: 'Nome do estado',
    default: 'Minas Gerais',
  })
  @IsString()
  state_name?: string;
}
