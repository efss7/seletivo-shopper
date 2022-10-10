import { config } from "dotenv";
import { DataSource } from "typeorm";
import { products1665086004537 } from "../migrations/1665086004537-products";
import { orders1665255204463 } from "../migrations/1665255204463-orders";
import { ProductsEntity } from "../model/entity/ProductsEntity";

config()

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: false,
    entities: [ProductsEntity],
    subscribers: [],
    migrations: [products1665086004537, orders1665255204463],
})