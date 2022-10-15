import { Request, Response } from "express";
import productsBusiness, { ProductsBusiness } from "../business/ProductsBusiness";

export class ProductsController {
  constructor(
    private productsBusiness: ProductsBusiness
  ) { }

  public findAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const result = await this.productsBusiness.findAll()
      res.status(200).send(result)
    } catch (error: any) {
      res.status(error.statusCode || 400).send({ error: error.message });
    }
  }
}
export default new ProductsController(productsBusiness);