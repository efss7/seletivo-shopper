import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class lists1665255204463 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "lists",
          columns: [
            {
              name: "id",
              type: "varchar",
              comment: "id da lista"
            },
            {
              name: "name",
              type: "varchar",
              comment: "nome do criador da lista"
            },
            {
              name: "dlr_date",
              type: "date",
              comment: "data de entrega",
            },
            {
              name: "products_id",
              type: "varchar",
              comment: "produtos da lista",
            },
            {
              name: "product_qty",
              type: "int",
              comment: "quantidade do produto",
            },
            {
              name: "total_price",
              type: "float",
              comment: "quantidade do produto",
            }
          ],
        }),
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("lists")
    }

}
