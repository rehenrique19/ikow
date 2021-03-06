import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UsuarioDto } from 'src/app/models/dto/usuario.dto';
import { environment } from 'src/environments/environment';
import { SocialAuthService, SocialUser, GoogleLoginProvider } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  key = 'userDtoKey';
  user: SocialUser;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private googleService: SocialAuthService)
    {}


  singnWithGoogle(){
    this.googleService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.googleService.authState.subscribe((user)=>{
      this.user = user;
    })
  }

  signOutGoogle(){
    this.googleService.signOut();
  }

  autenticar(usuario: UsuarioDto) {
    return this.authenticate(environment.api.baseUrl + 'Auth', usuario);
  }

  private authenticate(virtualPath: string, usuario: UsuarioDto) {
    return this.httpClient
      .post(
        virtualPath,
        usuario,
        {
          headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
          observe: 'response'
        }
      ).pipe(tap(res => {
        this.setLoggedUser(JSON.parse(JSON.stringify(res.body)));
      }));
  }

  setLoggedUser(userDto: UsuarioDto) {
    window.localStorage.setItem(this.key, JSON.stringify(userDto));
  }

  getLoggedUser(): UsuarioDto {
    return JSON.parse(window.localStorage.getItem(this.key)!);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    window.localStorage.removeItem(this.key);
    this.router.navigate([""]).then(() => {
      window.location.reload();
    });
  }

  removerLocalStorage() {
    window.localStorage.removeItem(this.key);
  }
}
