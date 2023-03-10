import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate{

constructor(
  private authService: AuthService,
  private router: Router
) { }

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  if(this.authService.isLogged()) {
    return true
  } else {
    this.router.navigate(['/auth/login'])
    return false
  }
}

}
