import { AngularMaterialModule } from './../../modules/app.material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
