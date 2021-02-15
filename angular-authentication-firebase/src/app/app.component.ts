import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = '"Angular Authentication via Firebase"';

  emailAddress: string;
  password: string;

  constructor(public authService: AuthService) { }

  signup() {
    this.authService.signup(this.emailAddress, this.password);
    this.emailAddress = this.password = '';
  }

  login() {
    this.authService.login(this.emailAddress, this.password);
    this.emailAddress = this.password = '';    
  }

  logout() {
    console.log('User is successfully logged out.')
    this.authService.logout();
  }
}
