import { Request, Response } from "express"
import ordersBusiness, { OrdersBusiness } from "../business/OrdersBusiness"
import { OrdersCreateDto } from "../model/dto/OrdersDto"

export class OrdersController {
  constructor(
    private ordersBusiness: OrdersBusiness
  ) { }

  public ProductList = async (req: Request, res: Response) => {
    try {
      const { name, dlr_date, products_id, product_qty, total_price } = req.body
      const inputs: OrdersCreateDto = { name, dlr_date, products_id, product_qty, total_price}
      await this.ordersBusiness.ProductList(inputs)
      res.status(201).send("Order registered successfully!")
    } catch (error: any) {
      res.status(error.statusCode || 400).send({ error: error.message })
    }
  }
}

export default new OrdersController(ordersBusiness);