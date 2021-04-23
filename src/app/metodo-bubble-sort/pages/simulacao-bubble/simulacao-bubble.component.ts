import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simulacao-bubble',
  templateUrl: './simulacao-bubble.component.html',
  styleUrls: ['./simulacao-bubble.component.css']
})
export class SimulacaoBubbleComponent implements OnInit {

  nomeMetodo = 'Bubble Sort';

  descricaoMetodo = "O bubble sort, ou ordenação por flutuação, é um algoritmo de ordenação dos mais simples. A ideia é percorrer o vetor diversas vezes, e a cada passagem fazer flutuar para a direita o maior elemento da sequência. A complexidade desse algoritmo é de ordem quadrática. Ler mais";

  collapseCardTitulo = "Objetivos";
  
  listaObjetivos = [
    "Criar sequência numérica.",
    "Percorra a sequência e execute as operações a seguir:",
    "Compare dois elementos adjacentes.",
    "Se os elementos não estiverem em ordem, ordene.",
    "Senão, avance para o próximo par.",
    "Repita a operação até que não haja mais trocas a serem feitas.",
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
