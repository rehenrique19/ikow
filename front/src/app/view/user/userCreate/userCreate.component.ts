import { UserDto } from './../../../models/dto/user.dto';
import { UserService } from './../../../services/userService/user.service';
import { RoleService } from './../../../services/roleService/role.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoleDto } from 'src/app/models/dto/role.dto';

@Component({
  selector: 'app-userCreate',
  templateUrl: './userCreate.component.html',
  styleUrls: ['./userCreate.component.css']
})
export class UserCreateComponent implements OnInit {

  userCreateForm : FormGroup;
  roles: Array<RoleDto> = new Array<RoleDto>();

  constructor(
    private roleService : RoleService,
    private userService : UserService,
    private fb : FormBuilder
  ) { }

  ngOnInit() {
    this.userCreateForm = this.fb.group({
        name : [null, [Validators.required]],
        email : [null, Validators.required],
        role : [null, [Validators.required]]
    });
    this.getRoles();
  }

  getRoles(){
    this.roleService.getRoles().subscribe(result => {
        this.roles = result;
    })
  }

  saveUser(){
    let user = new UserDto();
    user.perfil = new RoleDto();
    user.nome = this.userCreateForm.get('name')!.value;
    user.email = this.userCreateForm.get('email')!.value;
    user.perfil = this.roles.filter((x : RoleDto) => x.id == this.userCreateForm.get('role')!.value)[0];
    this.userService.setUser(user).subscribe(result => {
      console.log(result);
    })
  }
}
