export interface OrdersCreateDto {
  name:string,
  dlr_date:string,
  products_id:number[],
  product_qty:number[],
  total_price: number
}