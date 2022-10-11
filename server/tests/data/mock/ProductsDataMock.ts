import { Products } from "../../../src/model/Products";


export class ProductsDataMock{
  findAll = async (): Promise<Products[]> => [new Products("id1", 1, "name", 1)]
  findById = async (id: string) => [new Products("id1",1,"name",1)];
  update = async (input: Products): Promise<void> => {};
}
