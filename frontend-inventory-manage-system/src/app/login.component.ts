import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <div>
      <h1>Login Screen</h1>
      <button (click)="login()">Login</button>
    </div>
  `
})
export class LoginComponent {
  constructor(private router: Router) {}

  login(): void {
    // Simulate authentication and redirect to Main Application
    this.router.navigate(['/main']);
  }
}
