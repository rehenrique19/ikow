import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  private subject = new Subject<any>();

  private subject2 = new Subject<any>();
  url: string;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private cookieService: CookieService) {
  }

  primaryEvent(color: string) {
    this.subject.next(color);
  }

  getPrimaryEvent(): Observable<any> {
    return this.subject.asObservable();
  }

  secundaryEvent(color: string) {
    this.subject2.next(color);
  }

  getSecundaryEvent(): Observable<any> {
    return this.subject2.asObservable();
  }

  removerCor() {
    this.primaryEvent('null');
    this.secundaryEvent('null');
  }
}
