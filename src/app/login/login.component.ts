import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string | undefined;
  password: string | undefined;

  constructor(private router: Router) { }

  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      localStorage.setItem('user', 'admin');
      this.router.navigate(['/products/admin']);
    } else if (this.username === 'user' && this.password === 'user') {
      localStorage.setItem('user', 'user');
      this.router.navigate(['/products/user']);
    } else {
      alert('Invalid username or password!');
    }
  }
}
