import { OrdersData } from "../data/OrdersData";
import { ProductsData } from "../data/ProductsData";
import { OrdersCreateDto } from "../model/dto/OrdersDto";
import { Orders } from "../model/Orders";
import { IdGenerator } from "../service/IdGenerator";
import { CustomError } from "./errors/CustomError";

export class OrdersBusiness {
  constructor(
    private ordersData: OrdersData,
    private idGenerator: IdGenerator,
    private productsData: ProductsData
  ) { }

  ProductList = async (inputs: OrdersCreateDto) => {
    try {
      this.validation(inputs)
      const { name, dlr_date, products_id, product_qty } = inputs

      let ProductsDb = []
      for (let i = 0; i < products_id.length; i++) {
        const searchResult = await this.productsData.findById(products_id[i])
        if (searchResult.length === 0) {
          throw new CustomError(404, `Product ${products_id[i]} not found`)
        }
        if (searchResult[0].getStock() - product_qty[i] < 0) {
          throw new CustomError(422, `The requested quantity of ${searchResult[0].getName()} is greater than the available quantity`)
        }
        ProductsDb.push(searchResult[0])
      }
      ProductsDb = ProductsDb.map((product) => {
        const index = products_id.findIndex(id => id === product.getId())
        console.log(product.getStock(), product_qty[index])

        const purchaseQuantity = product.getStock() - product_qty[index]
        product.setStock(purchaseQuantity)
        return product
      })

      const product = ProductsDb.map((product) => {
        return this.productsData.update(product)
      })

      await Promise.all(product)

      const id = this.idGenerator.generateId()
      const ordersArray = products_id.map((idProduct, index) => {
        return new Orders(id, name, new Date(dlr_date), idProduct, product_qty[index])
      })
      const order = ordersArray.map((order) => {
        return this.ordersData.create(order)
      })
      const result = await Promise.all(order)
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message)
    }
  };
  arrayCheck = (array: any[], type: string) => {
    for (let i of array) {
      if (typeof i !== `${type}`) {
        return true
      }
    }
    return false
  }
  validation = (inputs: OrdersCreateDto) => {
    const { name, dlr_date, products_id, product_qty } = inputs

    if (!name || typeof name !== "string") {
      throw new CustomError(422, "Name is invalid")
    }
    if (!dlr_date || typeof name !== "string") {
      throw new CustomError(422, "Delivery date is invalid")
    }
    if (!Array.isArray(products_id) || this.arrayCheck(products_id, "string")) {
      throw new CustomError(422, "Product is invalid")
    }
    if (!Array.isArray(product_qty) || this.arrayCheck(product_qty, "number")) {
      throw new CustomError(422, "Quantity not available")
    }
    if (products_id.length !== product_qty.length) {
      throw new CustomError(422, "Non-matching product and quantities")
    }
  }
}

export default new OrdersBusiness(
  new OrdersData(),
  new IdGenerator(),
  new ProductsData()
);