import { api } from "../Api";

type CreateEmpresaRequest = {
  name: string;
  street_name: string;
  addrees_number: string;
  neighborhood_name: string;
  city_name: string;
  state_name: string;
};

type EditEmpresaRequest = {
  id: string;
  name: string;
  street_name: string;
  addrees_number: string;
  neighborhood_name: string;
  city_name: string;
  state_name: string;
};

export type EmpresaResponse = {
  id: string;
  name: string;
  street_name: string;
  addrees_number: string;
  neighborhood_name: string;
  city_name: string;
  state_name: string;
};

function CreateEmpresa({
  name,
  street_name,
  addrees_number,
  neighborhood_name,
  city_name,
  state_name,
}: CreateEmpresaRequest) {
  return api.post<EmpresaResponse>("/empresa", {
    name,
    street_name,
    addrees_number,
    neighborhood_name,
    city_name,
    state_name,
  });
}

function EditEmpresa({
  id,
  name,
  street_name,
  addrees_number,
  neighborhood_name,
  city_name,
  state_name,
}: EditEmpresaRequest) {
  return api.patch<EmpresaResponse>(`/empresa/${id}`, {
    name,
    street_name,
    addrees_number,
    neighborhood_name,
    city_name,
    state_name,
  });
}

function ListEmpresas() {
  return api.get<EmpresaResponse[]>("/empresa");
}

function GetEmpresa(id: string) {
  return api.get<EmpresaResponse>(`/empresa/${id}`);
}

function DeleteEmpresa(id: string) {
  return api.delete(`/empresa/${id}`);
}

export const Services = {
  CreateEmpresa,
  EditEmpresa,
  ListEmpresas,
  GetEmpresa,
  DeleteEmpresa,
};
