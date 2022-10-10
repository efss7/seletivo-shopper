import { ProductsData } from "../data/ProductsData";
import { ProductCreateDto, ProductsUpdateDto } from "../model/dto/ProductDto";
import { Products } from "../model/Products";
import { IdGenerator } from "../service/IdGenerator";
import { CustomError } from "./errors/CustomError";

export class ProductsBusiness {
  constructor(
    private productsData: ProductsData
  ) { }
  findAll = async (): Promise<Products[] | undefined> => {
    try {
      return this.productsData.findAll();
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message)
    }
  };

  findById = async (id: string) => {
    try {
      if (!id || typeof id !== "string") {
        throw new CustomError(422, "Id invalid")
      }
      const result = await this.productsData.findById(id);
      if (result.length === 0) {
        throw new CustomError(404, "Product not found")
      }
      return result
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };

  update = async (inputs: ProductsUpdateDto) => {
    try {
      const { id, qty_stock } = inputs
      if (!id || typeof id !== "string") {
        throw new CustomError(422, "Id is invalid")
      }
      if (!qty_stock || typeof qty_stock !== "number" || qty_stock > 0) {
        throw new CustomError(422, "Quantity in stock invalid")
      }
      const products = new Products(id, qty_stock)
      await this.productsData.update(products)
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message)
    }
  };
}

export default new ProductsBusiness(
  new ProductsData(),
);