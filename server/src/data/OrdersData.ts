import { CustomError } from "../business/errors/CustomError";
import { Orders } from "../model/Orders";
import BaseDatabase from "./BaseDatabase";

export class OrdersData extends BaseDatabase {
  create = async (input: Orders): Promise<void> => {
    try {
      await BaseDatabase.connection("orders")
        .insert({
          id: input.getId(),
          name: input.getName(),
          dlr_date: input.getDlrDate(),
          products_id: input.getProducts(),
          product_qty: input.getQuantity()
        })
    } catch (error: any) {
      throw new CustomError(500, error.sqlMessage);
    }
  }
}