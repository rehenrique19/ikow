import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(
    private router: Router,
    private auth: AuthService
  ) {
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({ headers: request.headers.set('Accept', 'application/json') }).clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.getToken()}`
      }
    });
    request = request.body instanceof FormData ?
      request.clone(
        {
          headers: request.headers.set('mimeType', 'multipart/form-data')
        }) :
      request.clone(
        {
          headers: request.headers.set('Content-Type', 'application/json; charset=utf-8')
        });
    return next.handle(request)
  }
}
