import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

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
  isOwner: boolean;

  @Column()
  isClient: boolean;

  //Address vem na relação
}

export default User_data;
