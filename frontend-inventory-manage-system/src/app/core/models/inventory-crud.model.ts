export class InventoryCrud {
    id: number;
    sku: string;
    name: string;
    quantity: number;
    createdBy?: string;
    createdDate?: Date;
    updatedBy?: string;
    updatedDate?: Date;
  
    constructor(
      id: number,
      sku: string,
      name: string,
      quantity: number,
      createdBy?: string,
      createdDate?: Date,
      updatedBy?: string,
      updatedDate?: Date
    ) {
      this.id = id;
      this.sku = sku;
      this.name = name;
      this.quantity = quantity;
      this.createdBy = createdBy;
      this.createdDate = createdDate;
      this.updatedBy = updatedBy;
      this.updatedDate = updatedDate;
    }
}