import { Router } from "express";
import listsController from "../../controller/ListsController";


export const listsRouter = Router();

listsRouter.post("", listsController.ProductList)

