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
          transform: 'translateX(0)',
        })
      ),
      state(
        'out',
        style({
          transform: 'translateX(-100%)',
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
    { path: '/main/sku-crud', label: 'SKU Creator', icon: 'dashboard' },
    { path: '/main/inventory', label: 'Inventory', icon: 'person' },
    { path: '/main/inventory-crud', label: 'Inventory Adjustments', icon: 'settings' },
    { path: '/main/reporting', label: 'Reporting', icon: 'help' }
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
