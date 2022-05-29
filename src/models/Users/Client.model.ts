import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import User_data from "./User_data.model";

@Entity("clients")
class Client {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToOne((type) => User_data, {
    eager: true,
  })
  @JoinColumn()
  user_data: User_data;
}

export default Client;
