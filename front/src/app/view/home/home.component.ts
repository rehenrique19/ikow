import { AuthService } from './../../services/auth/auth.service';

import { Component, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser, GoogleLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( ) { }

  ngOnInit() {
  }
}
