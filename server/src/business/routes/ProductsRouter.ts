import { Router } from "express";
import productsController from "../../controller/ProductsController";

export const productsRouter = Router();

productsRouter.get("", productsController.findAll)
productsRouter.get("/:id", productsController.findById)
productsRouter.patch("/:id", productsController.update)





