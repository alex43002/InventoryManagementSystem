import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [MatSidenavModule, MatListModule, CommonModule],
})
export class SidebarComponent {
    menuItems = [
        { label: 'SKU CRUD', path: '/main/sku-crud' },
        { label: 'Inventory', path: '/main/inventory' },
        { label: 'Inventory CRUD', path: '/main/inventory-crud' },
        { label: 'Reporting', path: '/main/reporting' },
      ];

    constructor(private router: Router) {}

  navigate(link: string): void {
    this.router.navigate([link]).catch((err) => console.error('Navigation Error:', err));
  }
}
