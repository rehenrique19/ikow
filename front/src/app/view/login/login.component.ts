import { Component, OnInit } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: SocialUser;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  singnWithGoogle(){
    this.authService.singnWithGoogle();
  }

  signOut(){
    this.authService.signOutGoogle();
  }
}
