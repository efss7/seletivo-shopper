export class Products {
  constructor(
    private id: number,
    private qty_stock: number,
    private name?: string,
    private price?: number,
  ) { }

  public getId(): number {
    return this.id;
  }

  public getName(): string | undefined {
    return this.name;
  }

  public getPrice(): number | undefined {
    return this.price;
  }

  public getStock(): number {
    return this.qty_stock;
  }
  public setStock(purchaseQuantity:number):void{
    this.qty_stock = purchaseQuantity
  }

}


