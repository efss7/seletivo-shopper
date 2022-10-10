import "reflect-metadata"
import { app } from "./controller/app";
import express from "express";
import cors from "cors";
import { productsRouter } from "./business/routes/ProductsRouter";
import { ordersRouter } from "./business/routes/OrdersRouter";


app.use(express.json());
app.use(cors());

app.use("/products", productsRouter)
app.use("/orders", ordersRouter)
