import { ListsData } from "../data/ListsData";
import { ProductsData } from "../data/ProductsData";
import { ListsCreateDto } from "../model/dto/ListsDto";
import { Lists } from "../model/Lists";
import { IdGenerator } from "../service/IdGenerator";
import { CustomError } from "./errors/CustomError";

export class ListsBusiness {
  constructor(
    private listsData: ListsData,
    private idGenerator: IdGenerator,
    private productsData: ProductsData
  ) { }

  ProductList = async (inputs: ListsCreateDto) => {
    try {

      const { name, dlr_date, products_id, product_qty, total_price } = inputs


      if (!name || typeof name !== "string") {
        throw new CustomError(422, "Name is invalid")
      }

      if (!dlr_date || typeof dlr_date !== "string") {
        throw new CustomError(422, "Delivery date is invalid")
      }

      if (!Array.isArray(products_id) || this.arrayCheck(products_id, "number")) {
        throw new CustomError(422, "Product is invalid")
      }

      if (!Array.isArray(product_qty) || this.arrayCheck(product_qty, "number")) {
        throw new CustomError(422, "Quantity not available")
      }

      if (!total_price || typeof total_price !== "number") {
        throw new CustomError(422, "Total price invalid")
      }

      if (products_id.length !== product_qty.length) {
        throw new CustomError(422, "Non-matching product and quantities")
      }


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
        const purchaseQuantity = product.getStock() - product_qty[index]
        product.setStock(purchaseQuantity)
        return product
      })

      const product = ProductsDb.map((product) => {
        return this.productsData.update(product)
      })

      await Promise.all(product)

      const id = this.idGenerator.generateId()

      const listsArray = products_id.map((idProduct, index) => {
        return new Lists(id, name, new Date(dlr_date), idProduct, product_qty[index], total_price)
      })

      const list = listsArray.map((list) => {
        return this.listsData.create(list)
      })

      const result = await Promise.all(list)
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

}

export default new ListsBusiness(
  new ListsData(),
  new IdGenerator(),
  new ProductsData()
);