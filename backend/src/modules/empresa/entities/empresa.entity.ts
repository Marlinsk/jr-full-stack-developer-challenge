import { Empresa } from '@prisma/client';

export class EmpresaEntity implements Empresa {
  readonly id: string;
  name: string;
  street_name: string;
  addrees_number: string;
  neighborhood_name: string;
  city_name: string;
  state_name: string;
}
