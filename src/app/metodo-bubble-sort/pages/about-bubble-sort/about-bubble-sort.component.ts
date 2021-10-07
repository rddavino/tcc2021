import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-bubble-sort',
  templateUrl: './about-bubble-sort.component.html',
  styleUrls: ['./about-bubble-sort.component.css']
})
export class AboutBubbleSortComponent implements OnInit {

  nomeMetodo = "Bubble Sort";
  
  constructor() { }

  ngOnInit(): void {
  }

}
