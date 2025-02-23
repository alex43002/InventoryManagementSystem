import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { importProvidersFrom } from '@angular/core';
import { AuthModule } from '@auth0/auth0-angular';
import { routes } from './app.routes';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    importProvidersFrom(RouterModule, HttpClientModule),
    importProvidersFrom(
      AuthModule.forRoot({
        domain: environment.auth.domain,
        clientId: environment.auth.clientId,
        authorizationParams: {
          redirect_uri: window.location.origin,
          audience: environment.auth.audience
        },
        cacheLocation: 'localstorage',
        useRefreshTokens: true,
      })
    ),
  ],
};
