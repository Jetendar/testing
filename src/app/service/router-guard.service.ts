import { Injectable, Component } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';


@Injectable({
  providedIn: 'root'
})
export class RouterGuardService implements CanActivate{
  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService) { 
   }
   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
   {
     if (this.hardcodedAuthenticationService.isUSerLoggedIn())
     return true;
     this.router.navigate(['login']);
     return false;
   }

  path: import("@angular/router").ActivatedRouteSnapshot[];
  route: import("@angular/router").ActivatedRouteSnapshot;

}
