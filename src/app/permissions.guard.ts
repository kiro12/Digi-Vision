import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionsGuard implements CanActivate {
  constructor(private  router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isLoggedIn = localStorage.getItem('user');
    if (isLoggedIn || isLoggedIn !== null) {
      if( isLoggedIn === 'admin'){

        return true;
      }else {
        this.router.navigate(['/products/user']);
        return  false;
      }
    } else {
      this.router.navigate(['/']);
      return false;
    }  }

}
