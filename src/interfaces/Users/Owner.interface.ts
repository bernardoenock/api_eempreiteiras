import { IAddressCreate } from "./Address.interface";

export interface IOwner {
  id: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  cellphone: string;
  cpf: string;
  rg: string;
  type: string;
  shop: string;
  address: IAddressCreate;
}

export interface IOwnerRegister {
  name: string;
  surname: string;
  email: string;
  password: string;
  cellphone: string;
  cpf: string;
  rg: string;
  address: IAddressCreate;
}
