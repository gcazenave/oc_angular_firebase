import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: "AIzaSyD6ShDw4fyLKBXCKMhxPypV1gYnBKp_8ug",
      authDomain: "angular-fb-oc-dfc07.firebaseapp.com",
      databaseURL: "https://angular-fb-oc-dfc07.firebaseio.com",
      projectId: "angular-fb-oc-dfc07",
      storageBucket: "angular-fb-oc-dfc07.appspot.com",
      messagingSenderId: "139079746377"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
  }
}

