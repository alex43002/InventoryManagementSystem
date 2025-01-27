import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-sku-crud',
  templateUrl: './sku-crud.component.html',
  styleUrls: ['./sku-crud.component.scss'],
  imports: [MatTableModule, MatButtonModule, MatIconModule], // Add required modules here
  standalone: true, // Ensures this component works independently
})
export class SkuCrudComponent implements OnInit {
  inventoryList = [
    { id: 1, name: 'Item A', quantity: 10 },
    { id: 2, name: 'Item B', quantity: 15 },
    { id: 3, name: 'Item C', quantity: 20 },
  ];

  dataSource = new MatTableDataSource(this.inventoryList);

  constructor() {}

  ngOnInit(): void {}

  openAddItemDialog(): void {
    console.log('Open Add Item Dialog');
  }

  editItem(item: any): void {
    console.log('Edit Item:', item);
  }

  deleteInventoryItem(id: number): void {
    this.inventoryList = this.inventoryList.filter(item => item.id !== id);
    this.dataSource.data = this.inventoryList; // Update the data source
  }
}
