import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { SignInService } from '../services/sign-in.service';


@Injectable({ providedIn: 'root' })

export class AuthorizeGuard implements CanActivate {

    constructor(private readonly router: Router, private readonly signInService: SignInService) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        let url: string = state.url;
        return this.validateRole(next, url);
    }

    validateRole(route: ActivatedRouteSnapshot, url: any): boolean {
        const roleClaim = this.signInService.getRoles();
        let response = false;
        if(typeof roleClaim !== 'string' ){
            roleClaim.forEach((role: string) => {
                if(role.includes('admin')){
                response = true;
                }
            });
        }
        
        if (response) return true;
        else {
            this.router.navigate(['dashboard']);
            return false;
        }
    }
}