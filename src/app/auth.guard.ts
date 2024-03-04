import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard {
  constructor(private router: Router, private authService: AuthService) {}
  canActivate(): boolean | UrlTree {
    console.log(
      'this auth service--',
      localStorage.getItem('user') === 'loggedIn'
    );

    if (localStorage.getItem('user') === 'loggedIn') {
      return true; // User is logged in, allow access
    } else {
      return this.router.parseUrl('/login'); // Redirect to login if not logged in
    }
  }
}
