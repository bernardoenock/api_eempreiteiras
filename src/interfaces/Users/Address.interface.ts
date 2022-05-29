export interface IAddress {
  id: string;
  street: string;
  district: string;
  number: string;
  complement: string;
  state: string;
  city: string;
  country: string;
  cep: string;
}

export interface IAddressCreate {
  street: string;
  district: string;
  number: string;
  complement: string;
  state: string;
  city: string;
  country: string;
  cep: string;
}
