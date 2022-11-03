export class Lists {
  constructor(
    private id: string,
    private name: string,
    private dlr_date: Date,
    private products_id: number,
    private product_qty: number,
    private total_price: number
  ) { }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getDlrDate(): Date {
    return this.dlr_date;
  }

  public getProducts(): number {
    return this.products_id;
  }

  public getQuantity(): number {
    return this.product_qty;
  }

  public getTotalPrice(): number {
    return this.total_price;
  }

}