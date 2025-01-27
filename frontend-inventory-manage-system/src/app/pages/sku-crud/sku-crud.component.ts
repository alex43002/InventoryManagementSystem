import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sku-crud',
  templateUrl: './sku-crud.component.html',
  styleUrls: ['./sku-crud.component.scss'],
  standalone: true,
  imports: [
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class SkuCrudComponent implements OnInit {
  inventoryList = [
    { id: 1, sku: '1234567890123', name: 'Item A', quantity: 10 },
    { id: 2, sku: '9876543210987', name: 'Item B', quantity: 15 },
    { id: 3, sku: '4567891234567', name: 'Item C', quantity: 20 },
  ];

  dataSource = new MatTableDataSource(this.inventoryList);
  editForm: FormGroup;
  editingItem: any = null;

  constructor(private fb: FormBuilder) {
    this.editForm = this.fb.group({
      quantity: ['', [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {}

  startEditItem(item: any): void {
    this.editingItem = item;
    this.editForm.patchValue({ quantity: item.quantity });
  }

  saveEdit(): void {
    if (this.editForm.valid && this.editingItem) {
      const index = this.inventoryList.findIndex(
        (item) => item.id === this.editingItem.id
      );
      if (index !== -1) {
        this.inventoryList[index].quantity = this.editForm.value.quantity;
        this.dataSource.data = this.inventoryList;
      }
      this.cancelEdit();
    }
  }

  cancelEdit(): void {
    this.editingItem = null;
    this.editForm.reset();
  }

  deleteInventoryItem(id: number): void {
    this.inventoryList = this.inventoryList.filter((item) => item.id !== id);
    this.dataSource.data = this.inventoryList;
  }
}
