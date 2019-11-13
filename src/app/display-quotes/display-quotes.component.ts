import { Component, OnInit } from '@angular/core';
import { QUOTES } from '../mock-quotes';

@Component({
  selector: 'app-display-quotes',
  templateUrl: './display-quotes.component.html',
  styleUrls: ['./display-quotes.component.css']
})
export class DisplayQuotesComponent implements OnInit {

  constructor() { }

  hero = QUOTES[Math.floor((Math.random() * 10))];
  //heroes = HEROES
  ngOnInit() {
  }

}
