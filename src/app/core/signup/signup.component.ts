import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  private registerForm: FormGroup;
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
    },
      {validator: this.validatePasswords('password', 'repeatPassword')}
    );
  }

  get f() { return this.registerForm.controls; }

  validatePasswords(targetKey: string, toMatchKey: string): ValidatorFn {
    return (group: FormGroup): {[key: string]: any} => {
      const target = group.controls[targetKey];
      const toMatch = group.controls[toMatchKey];
      if (target.touched && toMatch.touched) {
        const isMatch = target.value === toMatch.value;

        if (!isMatch && target.valid && toMatch.valid) {
          toMatch.setErrors({equalValue: targetKey});
          const message = targetKey + ' != ' + toMatchKey;

          return {'equalValue': message};
        }

        if (isMatch && toMatch.hasError('equalValue')) {
          toMatch.setErrors(null);
        }
      }
      return null;
    };
  }

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
