import { ProductsData } from "../data/ProductsData";
import { ProductCreateDto, ProductsUpdateDto } from "../model/dto/ProductDto";
import { Products } from "../model/Products";
import { IdGenerator } from "../service/IdGenerator";
import { CustomError } from "./errors/CustomError";

export class ProductsBusiness {
  constructor(
    private productsData: ProductsData,
    private idGenerator: IdGenerator
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

  create = async (inputs: ProductCreateDto) => {
    try {
      const { name, price, qty_stock } = inputs
      if (!name || typeof name !== "string") {
        throw new CustomError(422, "Name is invalid")
      }
      if (!price || typeof name !== "number" || price > 0) {
        throw new CustomError(422, "Price is invalid")
      }
      if (!qty_stock || typeof qty_stock !== "number" || qty_stock > 0) {
        throw new CustomError(422, "Quantity in stock invalid")
      }
      const id = this.idGenerator.generateId()
      const products = new Products(id, qty_stock, name, price)
      await this.productsData.create(products)
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message)
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

  delete = async (id: string): Promise<void> => {
    try {
      if (!id || typeof id !== "string") {
        throw new CustomError(422, "Id is invalid");
      }
      const result = await this.productsData.findById(id);
      if (result.length === 0) {
        throw new CustomError(404, "Product not found")
      }
      await this.productsData.delete(id);
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };

}

export default new ProductsBusiness(
  new ProductsData(),
  new IdGenerator(),
);