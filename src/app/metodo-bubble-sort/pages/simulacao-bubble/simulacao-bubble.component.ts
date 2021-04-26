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


  criarSequenciaNumerica(formCriaSequencia){
  let dadosForm = formCriaSequencia.form.value;

  this.randArray =  this.randomArray(Number(dadosForm.tamanho), 9);
  //console.log("array: ", this.randomArray(Number(dadosForm.tamanho), 9));
  this.indDadosForm = true;
  formCriaSequencia.form.reset();
  return this.randArray;   
  }

  randomArray(length, max) {
    return Array.apply(null, Array(length)).map(function() {
        return Math.round(Math.random() * max);
    });
  }

  receberDica() {
    this.toastr.info('Aqui tem uma super dica'); 
  }




}

