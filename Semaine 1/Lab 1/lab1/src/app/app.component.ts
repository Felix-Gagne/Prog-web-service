import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "lab1";
  cheapWisdom = "Not over until its over";
  n : number;

  constructor(){
    this.n = 4;
  }
  }
