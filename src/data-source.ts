import { config } from "dotenv";
import { DataSource } from "typeorm";
import { products1665086004537 } from "./migration/1665086004537-products";

config()

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: false,
    entities: [],
    subscribers: [],
    migrations: [products1665086004537],
})