import { UserDto } from './../../models/dto/user.dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http : HttpClient
  ) { }

  setUser(user : UserDto) {
      return this.http.post<UserDto>(environment.api.baseUrl + 'usuario', user);
  }
}
