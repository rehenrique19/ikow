import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    var usuario = this.authService.getLoggedUser();
    if (
      usuario
      && route.data.roles
      && route.data.roles.indexOf(usuario.perfil.descricao) !== -1) {
      return true;
    }
    else {
      this.router.navigate(['/home'])
      return false;
    }
  }
}
