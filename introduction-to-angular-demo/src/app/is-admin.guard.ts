import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service'

@Injectable()
export class IsAdminGuard implements CanActivate {

  constructor(private userService: UserService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.userService.isAdmin()
  }
}
