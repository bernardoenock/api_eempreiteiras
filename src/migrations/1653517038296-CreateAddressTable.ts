import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAddressTable1653517038296 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

    await queryRunner.createTable(
      new Table({
        name: "addresses",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "street",
            type: "varchar",
            length: "100",
          },
          {
            name: "district",
            type: "varchar",
            length: "100",
          },
          {
            name: "number",
            type: "varchar",
          },
          {
            name: "complement",
            type: "varchar",
          },
          {
            name: "state",
            type: "varchar",
          },
          {
            name: "city",
            type: "varchar",
          },
          {
            name: "country",
            type: "varchar",
          },
          {
            name: "cep",
            type: "varchar",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
