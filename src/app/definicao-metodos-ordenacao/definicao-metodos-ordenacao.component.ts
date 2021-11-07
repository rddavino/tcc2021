import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-definicao-metodos-ordenacao',
  templateUrl: './definicao-metodos-ordenacao.component.html',
  styleUrls: ['./definicao-metodos-ordenacao.component.css']
})
export class DefinicaoMetodosOrdenacaoComponent implements OnInit {

  constructor(
    private location: Location,
    private router: Router, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  redirecionarParaImportanciaMetodos() {
    this.router.navigate(['importancia-metodos-ordenacao']);
  }

  
  redirecionarParaPaginaAnterior() {
    this.location.back();
  }

  redirecionarParaMetodos() {
    this.router.navigate(['about-bubble-sort']);
  }

}
