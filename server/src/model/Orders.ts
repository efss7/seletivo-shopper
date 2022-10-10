export class Orders {
  constructor(
    private id: string,
    private name: string,
    private dlr_date: Date,
    private products_id: string,
    private product_qty: number
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

  public getProducts(): string {
    return this.products_id;
  }

  public getQuantity(): number {
    return this.product_qty;
  }

}