import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RoleDto } from 'src/app/models/dto/role.dto';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(
    private http : HttpClient
  ) { }

  getRoles() {
      return this.http.get<RoleDto[]>(environment.api.baseUrl + 'perfil');
  }
}
