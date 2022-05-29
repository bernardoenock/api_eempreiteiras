import { IAddressCreate } from "./Address.interface";

export interface IClient {
  id: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  cellphone: string;
  cpf: string;
  rg: string;
  type: string;
  address: IAddressCreate;
}

export interface IClientRegister {
  name: string;
  surname: string;
  email: string;
  password: string;
  cellphone: string;
  cpf: string;
  rg: string;
  type: string;
  address: IAddressCreate;
}
