import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import User_data from "./User_data.model";

@Entity("owners")
class Owner {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToOne((type) => User_data, {
    eager: true,
  })
  @JoinColumn()
  user_data: User_data;
}

export default Owner;
