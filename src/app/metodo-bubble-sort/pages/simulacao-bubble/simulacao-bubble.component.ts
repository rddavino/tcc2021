import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-simulacao-bubble',
  templateUrl: './simulacao-bubble.component.html',
  styleUrls: ['./simulacao-bubble.component.css']
})
export class SimulacaoBubbleComponent implements OnInit {

  randArray: any[];
  collapseCardTitulo = "Objetivos";
  indDadosForm: boolean;
  indAuxiliarCriada: boolean;
  mensagem: string;

  listaObjetivos = [
    "Criar sequência numérica.",
    "Percorra a sequência e execute as operações a seguir:",
    "Compare dois elementos adjacentes.",
    "Se os elementos não estiverem em ordem, ordene.",
    "Senão, avance para o próximo par.",
    "Repita a operação até que não haja mais trocas a serem feitas.",
  ];

  constructor(
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }


  criarSequenciaNumerica(formCriaSequencia) {
    let dadosForm = formCriaSequencia.form.value;

    this.randArray = this.randomArray(Number(dadosForm.tamanho), 9);
    //console.log("array: ", this.randomArray(Number(dadosForm.tamanho), 9));
    this.indDadosForm = true;
    formCriaSequencia.form.reset();
    return this.randArray;
  }

  randomArray(length, max) {
    return Array.apply(null, Array(length)).map(function () {
      return Math.round(Math.random() * max);
    });
  }

  receberDica() {
    this.toastr.info('Aqui tem uma super dica');
  }

  criarVariaevlAuxiliar() {
    this.indAuxiliarCriada = true;

  }

  limpar(randArray) {
    randArray = null;
    this.indDadosForm = false;
    this.indAuxiliarCriada = false;

  }


  // console.log("valor i na posicao i: ", randArray[i], i);
  // console.log("valor j na posição j: ", randArray[j], j);
  // console.log("valor j na posição j: ", randArray[j], j); 

  indicaOrdenacao(randArray, pos) {

    console.log("randArray: ", randArray);
    console.log("posição: ", randArray[pos]);


    if (randArray[pos] > randArray[pos + 1]) {
     this.mensagem = "mova o elemento para a direita";
     return;
    }
    
    this.mensagem = "elemento no lugar correto do pograma";
    return;
  }









}
