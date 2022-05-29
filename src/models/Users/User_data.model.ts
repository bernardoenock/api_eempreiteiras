import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import Address from "./Address.model";

@Entity("users_data")
class User_data {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  cellphone: string;

  @Column()
  cpf: string;

  @Column()
  rg: string;

  @Column()
  isOwner?: boolean;
  //Caso seja um desses dois usuarios, eles tem que obrigatoriamente setar o typo como true

  @Column()
  isClient?: boolean;

  @Column()
  isAdm: boolean; //setado como false;
  //O Adm tem que setar o isAdm como true e os outros como false

  @OneToOne((type) => Address, {
    eager: true,
  })
  @JoinColumn()
  address: Address;
}

export default User_data;
