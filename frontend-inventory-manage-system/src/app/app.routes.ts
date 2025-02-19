import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { MainComponent } from './features/main/main.component';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  // Redirect root path to login
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  
  // Login route
  { path: 'login', component: LoginComponent },

  // Main route with AuthGuard
  {
    path: 'main',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      // Redirect /main to /main/inventory by default
      { path: '', pathMatch: 'full', redirectTo: 'inventory' },

      // Lazy-loaded child routes
      {
        path: 'sku-crud',
        loadComponent: () =>
          import('./pages/sku-crud/sku-crud.component').then((m) => m.SkuCrudComponent),
      },
      {
        path: 'inventory',
        loadComponent: () =>
          import('./pages/inventory/inventory.component').then((m) => m.InventoryComponent),
      },
      {
        path: 'inventory-crud',
        loadComponent: () =>
          import('./pages/inventory-crud/inventory-crud.component').then((m) => m.InventoryCrudComponent),
      },
      {
        path: 'reporting',
        loadComponent: () =>
          import('./pages/reporting/reporting.component').then((m) => m.ReportingComponent),
      },
    ],
  },
];
