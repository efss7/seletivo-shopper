import { Router } from "express";
import ordersController from "../../controller/OrderController";


export const ordersRouter = Router();

ordersRouter.post("", ordersController.ProductList)

