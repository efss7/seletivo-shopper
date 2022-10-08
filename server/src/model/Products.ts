export class Products {
  constructor(
    private id: string,
    private qty_stock: number,
    private name?: string,
    private price?: number,
  ) { }

  public getId(): string {
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

}


