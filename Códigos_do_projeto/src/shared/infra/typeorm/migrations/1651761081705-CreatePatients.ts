import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePatients1651761081705 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "patients",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true
          },
          {
            name: "name",
            type: "varchar"
          },
          {
            name: "ethnicity",
            type: "varchar"
          },
          {
            name: "nationality",
            type: "varchar"
          },
          {
            name: "cpf",
            type: "varchar",
            isUnique: true
          },
          {
            name: "birth_date",
            type: "Date"
          },
          {
            name: "marital_status",
            type: "varchar"
          },
          {
            name: "address",
            type: "varchar"
          },
          {
            name: "state",
            type: "varchar"
          },
          {
            name: "city",
            type: "varchar"
          },
          {
            name: "gender",
            type: "varchar"
          },
          {
            name: "phone_number",
            type: "varchar"
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()"
          },
          {
            name: "updated_at",
            type: "timestamp",
            isNullable: true
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("patients")
  }

}