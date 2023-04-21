import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private  router: Router ,) {}

  canActivate() {
    const isLoggedIn = localStorage.getItem('user');
    if (isLoggedIn || isLoggedIn !== null) {
      console.log('here')
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }

  }

}
