import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  loadedFeature: string = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyB-Z8CDc_5_1E5wqxE3rH0e2nPmR1_0S2Y",
      authDomain: "angularrecipebook-af9f6.firebaseapp.com",
    });
  }
}
