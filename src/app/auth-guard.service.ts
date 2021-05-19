import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthServise } from './auth.service';


@Injectable()
export class AuthGuard implements CanActivate{

    set : boolean
    constructor(private authService: AuthServise, private router :Router){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
       return this.authService.isAuthenticated()
        .then(
            (authenticated: boolean) =>{
                if (authenticated){
                    return true;
                } else {
                    this.router.navigate(['login'])
                }
            }
        );
    }
}