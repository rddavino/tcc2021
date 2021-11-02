import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-importancia-metodos-ordenacao',
  templateUrl: './importancia-metodos-ordenacao.component.html',
  styleUrls: ['./importancia-metodos-ordenacao.component.css']
})
export class ImportanciaMetodosOrdenacaoComponent implements OnInit {

  constructor(
    private location: Location,
    private router: Router, 
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
  }

  redirecionarParaPaginaAnterior() {
    this.location.back();
  }

  redirecionarParaMetodos() {
    this.router.navigate(['about-bubble-sort']);
  }
}
