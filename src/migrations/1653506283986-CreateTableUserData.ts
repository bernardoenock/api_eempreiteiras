import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableUserData1653506283986 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

    await queryRunner.createTable(
      new Table({
        name: "users_data",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "surname",
            type: "varchar",
            length: "50",
          },
          {
            name: "email",
            type: "varchar",
          },
          {
            name: "password",
            type: "varchar",
          },
          {
            name: "cellphone",
            type: "varchar",
            length: "11",
          },
          {
            name: "cpf",
            type: "varchar",
            length: "11",
          },
          {
            name: "rg",
            type: "varchar",
            length: "8",
          },
          {
            name: "isOwner",
            type: "boolean",
          },
          {
            name: "isClient",
            type: "boolean",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users_data");
  }
}

// {
//     name: "created_at",
//     type: "timestamp",
//     default: "now()",
//   },
//   {
//     name: "updated_at",
//     type: "timestamp",
//     default: "now()",
//   },
