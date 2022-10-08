export interface ProductCreateDto{
    name:string
    price:number
    qty_stock:number
}

export interface ProductsUpdateDto {
  id:string
  qty_stock: number
}