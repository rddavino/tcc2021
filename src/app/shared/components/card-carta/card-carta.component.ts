import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-carta',
  templateUrl: './card-carta.component.html',
  styleUrls: ['./card-carta.component.css']
})
export class CardCartaComponent implements OnInit {

  @Input() valor: number;
  @Input() array: any;


  constructor() { }

  ngOnInit(): void {
  }

}
