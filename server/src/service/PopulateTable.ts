import * as fs from 'fs';
import * as csv from 'fast-csv';
import { AppDataSource } from './DataSource';
import IdGenerator from './IdGenerator';
import { ProductsEntity } from '../model/entity/ProductsEntity';

//Arquivo de popular a tabela com o arquivo csv

const read = () => {
  const products: ProductsEntity[] = []
  fs.createReadStream('./products.csv')
    .pipe(csv.parse({ headers: true }))
    .on('error', error => console.error(error))
    .on('data', row => products.push(row))
    .on('end', async () => {
      try {
        await AppDataSource.initialize()
        const repository = AppDataSource.getRepository(ProductsEntity)
        const promisesArray = products.map(product => {
          const id = IdGenerator.generateId()
          const newProduct = new ProductsEntity(
            id,
            product.name,
            product.price,
            product.qty_stock
          )
          return repository.save(newProduct)
        })
        const resultDb = await Promise.all(promisesArray)
        console.log(resultDb)
      } catch (error) {
        console.log(error)
      } finally {
        await AppDataSource.destroy()
      }
    })
}

read()