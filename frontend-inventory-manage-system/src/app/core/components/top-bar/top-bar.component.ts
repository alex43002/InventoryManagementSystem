import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule],
})
export class TopBarComponent {

  constructor(private authService: AuthService) {}
  

  logout() {
    console.log('Logout clicked'); // Placeholder for now
    this.authService.logout();
  }

  showUserInfo() {
    console.log('User Info clicked'); // Placeholder for now
  }
}
