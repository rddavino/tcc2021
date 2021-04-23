import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-simulacao',
  templateUrl: './header-simulacao.component.html',
  styleUrls: ['./header-simulacao.component.css']
})
export class HeaderSimulacaoComponent implements OnInit {

  @Input() nomeMetodo: string;
  @Input() descricaoMetodo: string;


  constructor() { }

  ngOnInit(): void {
  }

  abrirModalCriarSequencia() {
    console.log('abriu modal');
  }

  criarSequenciaNumerica() {
    console.log('criou sequencia');
  }
}
