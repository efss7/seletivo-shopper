import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class orders1665255204463 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "orders",
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
            }
          ],
        }),
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("orders")
    }

}
