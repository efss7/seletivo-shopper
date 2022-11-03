import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class products1665086004537 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "products",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        comment: "id do produto"
                    },
                    {
                        name: "name",
                        type: "varchar",
                        comment:"nome do produto"
                    },
                    {
                        name: "price",
                        type: "float",
                        comment: "preço do produto em reais",
                    },
                    {
                        name: "qty_stock",
                        type: "int",
                        comment: "quantidade em stock",
                    },
                ],
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("products")
    }

}
