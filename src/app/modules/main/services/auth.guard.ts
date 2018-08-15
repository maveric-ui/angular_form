import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {
  constructor( private router: Router ) {}

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const getUserToken = sessionStorage.getItem('userToken');

    if (getUserToken) {
      return true;
    } else {
      this.router.navigate(['/main']);
    }
  }





}
