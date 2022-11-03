import "reflect-metadata"
import { app } from "./controller/app";
import express from "express";
import cors from "cors";
import { productsRouter } from "./business/routes/ProductsRouter";
import { listsRouter } from "./business/routes/ListsRouter";


app.use(express.json());
app.use(cors());

app.use("/products", productsRouter)
app.use("/lists", listsRouter)
