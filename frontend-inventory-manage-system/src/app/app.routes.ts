import { Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { MainComponent } from './main.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent }
];
