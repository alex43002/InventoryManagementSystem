import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { MainComponent } from './features/main/main.component';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent, canActivate: [AuthGuard] },
];
