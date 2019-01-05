import * as firebase from "firebase/app";

export const environment = {
  production: true,
  firebase: {
    apiKey: "AIzaSyC7RiyRN3qaCwtOfg7-BastJUlziHyWp0I",
    authDomain: "opti-clima.firebaseapp.com",
    databaseURL: "https://opti-clima.firebaseio.com",
    projectId: "opti-clima",
    storageBucket: "opti-clima.appspot.com",
    messagingSenderId: "372429267973"
  }
};

firebase.initializeApp(environment.firebase);