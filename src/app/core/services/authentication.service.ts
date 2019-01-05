import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isLogged = false;

  constructor(
    private router: Router
    ) { }
  
  signup(user) {
    auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(() => {
        console.log('registered!')
      })
      .then(() => {
        this.router.navigate(['/login'])
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }

        console.log(error);
    });
  }

  login(email, password) {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('logged in!')
      })
      .then(() => {
        this.isLogged = true;
      })
      .then(() => {
        this.router.navigate(['/home'])
      })
      .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      
      console.log(error);
    });
  }

  logout() {
    auth().signOut();
    this.isLogged = false;
    this.router.navigate(['/login']);
  }
}