import { Request, Response } from "express";
import productsBusiness, { ProductsBusiness } from "../business/ProductsBusiness";
import { ProductCreateDto, ProductsUpdateDto } from "../model/dto/ProductDto";

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

  public findById = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params
      const result = await this.productsBusiness.findById(id);
      res.status(200).send(result);
    } catch (error: any) {
      res.status(error.statusCode || 400).send({ error: error.message });
    }
  }

  public create = async (req: Request, res: Response) => {
    try {
      const { name, price, qty_stock } = req.body
      const inputs: ProductCreateDto = { name, price, qty_stock }
      await this.productsBusiness.create(inputs)
      res.status(201).send("Product registered successfully!")
    } catch (error: any) {
      res.status(error.statusCode || 400).send({ error: error.message })
    }
  }

  public update = async (req: Request, res: Response) => {
    try {
      const { qty_stock } = req.body
      const { id } = req.params
      const inputs: ProductsUpdateDto = { id, qty_stock }
      await this.productsBusiness.update(inputs)
      res.status(201).send("Product successfully updated!")
    } catch (error: any) {
      res.status(error.statusCode || 400).send({ error: error.message })
    }
  }

  delete = async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;
    try {
      await this.productsBusiness.delete(id)
      res.status(200).send("Produto excluído com sucesso");
    } catch (error: any) {
      res.status(error.statusCode || 400).send({ error: error.message });
    }
  }
}
export default new ProductsController(productsBusiness);