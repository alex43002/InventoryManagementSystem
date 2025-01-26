import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.handleAuthCallback();

    this.authService.isLoggedIn().subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        this.router.navigate(['/main']); // Navigate to main page if authenticated
      } else {
        this.router.navigate(['/login']); // Redirect to login if not authenticated
      }
    });
  }
}
