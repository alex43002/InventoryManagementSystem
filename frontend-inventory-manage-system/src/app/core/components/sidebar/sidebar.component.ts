import { Component, HostListener, OnInit, AfterViewInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('slideInOut', [
      state(
        'in',
        style({
          width: '240px',
        })
      ),
      state(
        'out',
        style({
          width: '64px',
        })
      ),
      transition('in <=> out', [animate('300ms ease-in-out')]),
    ]),
  ],
  imports: [
    MatListModule, // For mat-nav-list and mat-list-item
    MatIconModule, // For mat-icon
    MatButtonModule, // For toggle button and icons
    RouterLink,
    CommonModule
  ],
  standalone: true, // Optional: Use standalone components if not part of a module
})
export class SidebarComponent implements OnInit, AfterViewInit {
  isSidebarOpen = false;
  activeRoute = '';
  menuItems = [
    { path: '/main/sku-crud', label: 'SKU Creator', icon: 'add_circle_outline' }, // Represents creation and addition
    { path: '/main/inventory', label: 'Inventory', icon: 'inventory' }, // Matches inventory management
    { path: '/main/inventory-crud', label: 'Inventory Adjustments', icon: 'edit_note' }, // Editing or adjusting notes
    { path: '/main/reporting', label: 'Reporting', icon: 'bar_chart' } // Suitable for analytics or reporting
  ];
  

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  navigate(path: string) {
    this.activeRoute = path;
    this.isSidebarOpen = false; // Close sidebar after navigating
  }

  @HostListener('window:resize', [])
  adjustArrowPosition() {
    const toggleArrow = document.querySelector('.toggle-arrow') as HTMLElement;
    if (toggleArrow) {
      toggleArrow.style.top = `${window.innerHeight / 2 - 20}px`;
    }
  }

  ngOnInit() {
    this.adjustArrowPosition();
  }

  ngAfterViewInit() {
    this.adjustArrowPosition();
  }
}
