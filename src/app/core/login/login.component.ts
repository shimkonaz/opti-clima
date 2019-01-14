import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading = false;
  submitted = false;

  model: any = {};

  constructor(
    private authenticationService: AuthenticationService
    ) { }

  ngOnInit() { }

  onSubmit() {
    this.submitted = true;
    this.loading = true;
    this.login(this.model.email, this.model.password);
  }

  login(username, password) {
    this.authenticationService.login(username, password);
  }

  logout() {
    this.authenticationService.logout;
  }
}
