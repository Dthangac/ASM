import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean> | Promise<boolean | UrlTree> {
    return this.authService.isAuthenticated()
      .then((authenticated: boolean) => {
        console.log('authenticated');
        console.log(authenticated);
        if (authenticated) {
          return true; // cho phép sử dụng route
        } else {
          this.router.navigate(['/login']); // điều hướng đến trang đăng nhập
          return false; // không cho phép sử dụng route
        }
      });
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean> | Promise<boolean | UrlTree> {
    // gọi canActivate lại trong lớp
    return this.canActivate(childRoute, state);
  }
}
