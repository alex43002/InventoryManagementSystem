import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class MainComponent {
  user$: Observable<{ name: string; email: string } | null>;

  constructor(public auth: AuthService) {
    this.user$ = this.auth.user$ as Observable<{ name: string; email: string } | null>;
  }

  logout(): void {
    this.auth.logout({ logoutParams: { returnTo: document.location.origin } });
  }
}
