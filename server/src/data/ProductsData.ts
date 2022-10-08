import { CustomError } from "../business/errors/CustomError";
import { Products } from "../model/Products";
import BaseDatabase from "./BaseDatabase";

export class ProductsData extends BaseDatabase {

  findAll = async (): Promise<Products[]> => {
    try {
      return BaseDatabase.connection("products")
        .select("*")
    } catch (error) {
      throw new CustomError(500, error.sqlMessage)
    }
  }

  findOne = async (id: string) => {
    try {
      const result = await BaseDatabase.connection("products")
        .select("*")
        .where({ id });
      if (result.length !== 0) {
        const product = new Products(
          result[0].id,
          result[0].name,
          result[0].price,
          result[0].qty_stock
        )
        return [product]
      } else {
        return []
      }
    } catch (error: any) {
      throw new CustomError(500, error.sqlMessage);
    }
  };

  create = async (input: Products): Promise<void> => {
    try {
      await BaseDatabase.connection("products")
        .insert({
          id: input.getId(),
          name: input.getName(),
          price: input.getPrice(),
          qty_stock: input.getStock()
        })
    } catch (error: any) {
      throw new CustomError(500, error.sqlMessage);
    }
  };

  update = async (input: Products): Promise<void> => {
    try {
      await BaseDatabase.connection("products")
        .update({
          id: input.getId(),
          qty_stock: input.getStock()
        })
        .where({ id: input.getId() })
    } catch (error: any) {
      throw new CustomError(500, error.sqlMessage);
    }
  };

  delete = async (id: string) => {
    try {
      await BaseDatabase.connection("products")
        .where({ id })
        .delete()
    } catch (error: any) {
      throw new CustomError(500, error.sqlMessage);
    }
  };
}
