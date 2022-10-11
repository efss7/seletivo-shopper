import { OrdersBusiness } from "../src/business/OrdersBusiness";
import IdGeneratorMock from "./data/idGenerator";
import { OrdersDataMock } from "./data/mock/OrdersDataMock";
import { ProductsDataMock } from "./data/mock/ProductsDataMock";

const OrdersBusinessMock = new OrdersBusiness(
  new OrdersDataMock(),
  new IdGeneratorMock(),
  new ProductsDataMock()
);

export const inputs = {
  "name": "name",
  "dlr_date": "2022/10/10",
  "products_id": ["id1"],
  "product_qty": [1]
}
describe("test OrdersBusiness class", () => {
  describe("test ProductList", () => {
    test("test missing name", async () => {
      inputs.name = "";
      try {
        await OrdersBusinessMock.ProductList(inputs)
      } catch (error: any) {
        inputs.name = "name";
        expect(error.message).toEqual("Name is invalid");
        expect(error.statusCode).toStrictEqual(422);
      } finally {
        expect.assertions(2);
      }
    })
    test("test missing dlr_date", async () => {
      inputs.dlr_date = "";
      try {
        await OrdersBusinessMock.ProductList(inputs)
      } catch (error: any) {
        inputs.dlr_date = "2022/10/10";
        expect(error.message).toEqual("Delivery date is invalid");
        expect(error.statusCode).toStrictEqual(422);
      } finally {
        expect.assertions(2);
      }
    })
    test("test missing products_id", async () => {
      inputs.products_id = [null];
      try {
        await OrdersBusinessMock.ProductList(inputs)
      } catch (error: any) {
        inputs.products_id = ["id1"];
        expect(error.message).toEqual("Product is invalid");
        expect(error.statusCode).toStrictEqual(422);
      } finally {
        expect.assertions(2);
      }
    })
    test("test missing product_qty", async () => {
      inputs.product_qty = [null];
      try {
        await OrdersBusinessMock.ProductList(inputs)
      } catch (error: any) {
        inputs.product_qty = [1];
        expect(error.message).toEqual("Quantity not available");
        expect(error.statusCode).toStrictEqual(422);
      } finally {
        expect.assertions(2);
      }
    })
  })
})