import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { AuthMainService } from './auth-main.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authMainService: AuthMainService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    return this.checkSignIn(url);
  }


  checkSignIn(url: string): boolean {
    if (this.authMainService.signIn) { return true; }
    this.authMainService.redirectUrl = url;
    this.router.navigate(['/main']);
    return false;
  }




}
