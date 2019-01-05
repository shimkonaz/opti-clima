// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// import {initializeApp} from "firebase";
import * as firebase from "firebase/app";

export const environment = {
  production: false,
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
