export interface ProductCreateDto{
    name:string
    price:number
    qty_stock:number
}

export interface ProductsUpdateDto {
  id:number
  qty_stock: number
}