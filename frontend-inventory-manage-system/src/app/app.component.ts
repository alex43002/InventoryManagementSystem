import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.handleAuthCallback();

    // Wait for the router to resolve the current URL
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.authService.isLoggedIn().subscribe((isAuthenticated) => {
          if (isAuthenticated) {
            // Redirect only if not already in a /main route
            if (!this.router.url.startsWith('/main')) {
              console.log('Redirecting to /main');
              this.router.navigate(['/main']);
            }
          } else {
            // Redirect to login if not authenticated
            this.router.navigate(['/login']);
          }
        });
      });
  }
}
