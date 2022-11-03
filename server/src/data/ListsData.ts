import { CustomError } from "../business/errors/CustomError";
import { Lists } from "../model/Lists";
import BaseDatabase from "./BaseDatabase";

export class ListsData extends BaseDatabase {
  create = async (input: Lists): Promise<void> => {
    try {
      await BaseDatabase.connection("lists")
        .insert({
          id: input.getId(),
          name: input.getName(),
          dlr_date: input.getDlrDate(),
          products_id: input.getProducts(),
          product_qty: input.getQuantity(),
          total_price: input.getTotalPrice()
        })
    } catch (error: any) {
      throw new CustomError(500, error.sqlMessage);
    }
  }
}