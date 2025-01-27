import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';

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
    MatTooltipModule
  ],
})
export class SkuCrudComponent implements OnInit {
  skuList = [
    {
      id: 1,
      sku: '1234567890123',
      name: 'Item A',
      createdBy: 'Admin',
      createdDate: new Date().toISOString(),
      updatedBy: '',
      updatedDate: '',
    },
  ];

  dataSource = new MatTableDataSource(this.skuList);
  skuForm: FormGroup;
  editingItem: any = null;

  constructor(private fb: FormBuilder) {
    this.skuForm = this.fb.group({
      sku: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]],
      name: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {}

  addSku(): void {
    if (this.skuForm.valid) {
      const newSku = {
        id: this.skuList.length + 1,
        sku: this.skuForm.value.sku,
        name: this.skuForm.value.name,
        createdBy: 'Admin',
        createdDate: new Date().toISOString(),
        updatedBy: '',
        updatedDate: '',
      };
      this.skuList.push(newSku);
      this.dataSource.data = this.skuList; // Update the data source
      this.skuForm.reset();
    }
  }

  startEditItem(item: any): void {
    this.editingItem = item;
    this.skuForm.patchValue({
      sku: item.sku,
      name: item.name,
    });
  }

  saveEdit(): void {
    if (this.skuForm.valid && this.editingItem) {
      const index = this.skuList.findIndex((item) => item.id === this.editingItem.id);
      if (index !== -1) {
        this.skuList[index] = {
          ...this.skuList[index],
          sku: this.skuForm.value.sku,
          name: this.skuForm.value.name,
          updatedBy: 'Admin',
          updatedDate: new Date().toISOString(),
        };
        this.dataSource.data = this.skuList; // Update the data source
      }
      this.cancelEdit();
    }
  }

  cancelEdit(): void {
    this.editingItem = null;
    this.skuForm.reset();
  }

  deleteSku(id: number): void {
    this.skuList = this.skuList.filter((sku) => sku.id !== id);
    this.dataSource.data = this.skuList; // Update the data source
  }
}
