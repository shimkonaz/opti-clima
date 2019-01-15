import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [
        Validators.required, 
        Validators.maxLength(100)
      ]],
      lastName: ['', [
        Validators.required, 
        Validators.maxLength(100)
      ]],
      email: ['', [
        Validators.required,
        Validators.email, 
        Validators.maxLength(100)
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern('((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,100})'),
        Validators.minLength(8), 
        Validators.maxLength(100)
      ]],
      repeatPassword: ['', [
        Validators.required, 
        Validators.maxLength(100)
      ]]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
        return;
    }

    this.loading = true;
    this.authenticationService
      .signup(this.registerForm.value)
  }
}
