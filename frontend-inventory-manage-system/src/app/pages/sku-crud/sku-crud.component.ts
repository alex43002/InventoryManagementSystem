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
  skuList = [
    {
      id: 1,
      sku: '1234567890123',
      name: 'Item A',
      createdBy: 'Admin',
      createdDate: new Date().toISOString(),
      updatedBy: null,
      updatedDate: null,
    },
  ];

  dataSource = new MatTableDataSource(this.skuList);
  skuForm: FormGroup;

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
        updatedBy: null,
        updatedDate: null,
      };
      this.skuList.push(newSku);
      this.dataSource.data = this.skuList; // Update the data source
      this.skuForm.reset();
    }
  }

  deleteSku(id: number): void {
    this.skuList = this.skuList.filter((sku) => sku.id !== id);
    this.dataSource.data = this.skuList; // Update the data source
  }
}
