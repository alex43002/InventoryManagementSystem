import { Injectable } from '@angular/core';
import { AuthService as Auth0Service } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth0: Auth0Service) {}

  /**
   * Trigger login with Auth0
   */
  login(): void {
    this.auth0.loginWithRedirect();
  }

  /**
   * Trigger logout with Auth0
   * Redirects to the provided `returnTo` URL after logout
   */
  logout(): void {
    this.auth0.logout({ logoutParams: { returnTo: document.location.origin } });
  }

  /**
   * Check if the user is authenticated
   * Returns an Observable<boolean>
   */
  isLoggedIn(): Observable<boolean> {
    return this.auth0.isAuthenticated$;
  }

  /**
   * Get user profile information
   * Returns an Observable<any>
   */
  getUserProfile(): Observable<any> {
    return this.auth0.user$;
  }

  /**
   * Handle the Auth0 redirect callback after login
   */
  handleAuthCallback(): void {
    this.auth0.handleRedirectCallback().subscribe({
      next: () => console.log('Redirect callback handled successfully.'),
      error: (err) => console.error('Error handling redirect callback:', err),
    });
  }
}
