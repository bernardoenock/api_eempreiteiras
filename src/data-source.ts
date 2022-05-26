import { DataSource } from "typeorm";

import "dotenv/config";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 45432,

  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD, //PWD
  database: process.env.POSTGRES_DB,

  synchronize: false,
  logging: true,
  entities: ["src/models/*.ts"],
  migrations: ["src/migrations/*.ts"],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source Initialized");
  })
  .catch((err) => {
    console.error("Error during Data Source Initialization", err);
  });
