import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { InventoryCrud } from '../models/inventory-crud.model';

@Injectable({
  providedIn: 'root',
})
export class InventoryCrudService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getInventoryCrud(): Observable<InventoryCrud[]> {
    return this.http.get<InventoryCrud[]>(`${this.apiUrl}/inventory/crud`); 
  }

}
