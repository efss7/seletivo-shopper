import { ProductsBusiness } from "../src/business/ProductsBusiness";
import { ProductsDataMock } from "./data/mock/ProductsDataMock";

const ProductsBusinessMock = new ProductsBusiness(
  new ProductsDataMock()
);

export const inputs = {
  id: "id1",
  name: "name",
  price: 1,
  qty_stock: 1,
}

describe("test ProductsBusiness class", () => {
  describe("test findAll", () => {
    test("test response", async () => {
      const result = await ProductsBusinessMock.findAll();
      expect(result).toMatchObject([{...inputs}])
    })
  })
  describe("test findById", () => {
    test("test response", async () => {
      const result = await ProductsBusinessMock.findById(inputs.id);
      expect(result).toEqual([{...inputs}])
    })
  })
  describe("test update", ()=>{
    test("test missing products_id", async () => {
      inputs.id = "";
      try {
        await ProductsBusinessMock.update(inputs)
      } catch (error: any) {
        inputs.id = "id1";
        expect(error.message).toEqual("Id is invalid");
        expect(error.statusCode).toStrictEqual(422);
      } finally {
        expect.assertions(2);
      }
    })
    test("test missing product_qty", async () => {
      inputs.qty_stock = null;
      try {
        await ProductsBusinessMock.update(inputs)
      } catch (error: any) {
        inputs.qty_stock = 1;
        expect(error.message).toEqual("Quantity in stock invalid");
        expect(error.statusCode).toStrictEqual(422);
      } finally {
        expect.assertions(2);
      }
    })
  })
})

