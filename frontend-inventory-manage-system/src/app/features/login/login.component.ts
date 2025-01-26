import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login();
    this.router.navigate(['/main']);
  }
}
