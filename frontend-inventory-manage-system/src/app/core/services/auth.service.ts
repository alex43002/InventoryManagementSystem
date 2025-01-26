import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService as Auth0Service } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth0: Auth0Service, private router: Router) {}

  LOGIN_CONSTANT = "/main";
  
  login(): void {
    this.auth0.isAuthenticated$.subscribe((isAuthenticated) => {
      if (!isAuthenticated) {
        this.auth0.loginWithRedirect({
          authorizationParams: {
            redirect_uri: window.location.origin,
          },
        });
      }
      else{
        this.router.navigate([this.LOGIN_CONSTANT]);
      }
    });
  }
  

  logout(): void {
    this.auth0.logout({ logoutParams: { returnTo: document.location.origin } });
  }

  isLoggedIn(): Observable<boolean> {
    return this.auth0.isAuthenticated$;
  }

  getUserProfile(): Observable<any> {
    return this.auth0.user$;
  }

  handleAuthCallback(): void {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const hasAuthParams = urlParams.has('code') && urlParams.has('state');
  
      if (hasAuthParams) {
        this.auth0.handleRedirectCallback().subscribe({
          next: () => {
            console.log('Redirect callback handled successfully.')
            this.router.navigate([this.LOGIN_CONSTANT]);
          },
          error: (err) => {
            //console.error('Error handling redirect callback:', err);
            localStorage.clear(); // Clear any invalid state
          },
        });
      } else {
        console.warn('No authentication parameters found in URL.');
      }
    } catch (error) {
      console.error('Error during callback handling:', error);
      localStorage.clear(); // Clear storage if an unexpected error occurs
    }
  }
  
}
