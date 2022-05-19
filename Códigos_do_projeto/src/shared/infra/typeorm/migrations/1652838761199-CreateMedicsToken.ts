import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMedicsToken1652838761199 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "medics_tokens",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true
          },
          {
            name: "refresh_token",
            type: "varchar"
          },
          {
            name: "medic_id",
            type: "uuid"
          },
          {
            name: "expires_date",
            type: "timestamp"
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()"
          }
        ],
        foreignKeys: [
          {
            name: "FKMedicToken",
            referencedTableName: "medics",
            referencedColumnNames: ["id"],
            columnNames: ["medic_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("medics_tokens")
  }

}
