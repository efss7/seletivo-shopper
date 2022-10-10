export interface OrdersCreateDto {
  name:string,
  dlr_date:string,
  products_id:string[],
  product_qty:number[]
}