import { Request, Response } from "express"
import listsBusiness, { ListsBusiness } from "../business/ListsBusiness"
import { ListsCreateDto } from "../model/dto/ListsDto"

export class ListsController {
  constructor(
    private listsBusiness: ListsBusiness
  ) { }

  public ProductList = async (req: Request, res: Response) => {
    try {
      const { name, dlr_date, products_id, product_qty, total_price } = req.body
      const inputs: ListsCreateDto = { name, dlr_date, products_id, product_qty, total_price }
      await this.listsBusiness.ProductList(inputs)
      res.status(201).send("Order registered successfully!")
    } catch (error: any) {
      res.status(error.statusCode || 400).send({ error: error.message })
    }
  }
}

export default new ListsController(listsBusiness);