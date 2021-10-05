import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simulacao-selection',
  templateUrl: './simulacao-selection.component.html',
  styleUrls: ['./simulacao-selection.component.css']
})
export class SimulacaoSelectionComponent implements OnInit {

  indSequenciaCriada;
  indAuxiliarCriada;
  indDadosForm;

  isVetorOrdenado;

  mensagemAlerta;
  mensagemAtencao;
  mensagemInfo;

  randArray;
  last;
  isCardSelecionado;

  constructor() { }

  ngOnInit(): void {
  }

  abrirCartas(){
    //TO DO
  }

  avancar() {
    //TO DO
  }

  criarSequenciaNumerica(formCriaSequencia) {
    let dadosForm = formCriaSequencia.form.value;    
    
    let tamanho = dadosForm.tamanho;
    this.randArray = this.randomArray(Number(tamanho), 9);
    this.randArray.sort(() => Math.random() - 0.5);
    
    if(tamanho !== '' || tamanho !== 0) {
      this.indDadosForm = true;
      formCriaSequencia.form.reset();
      this.indSequenciaCriada = true;
     
      return this.randArray;

    } else {
      this.mensagemAtencao = "O vetor deve ter no mínimo 3 elementos."
    }
  }

  criarVariavelAuxiliar() {
    //TO DO
  }

  limpar() {
    //TO DO
  }

  limparMensagem() {
    //TO DO
  }

  moverParaAuxiliar(posCardSelecionado){
    //TO DO
  }

  moverParaVetor() {
    //TO DO
  }

  randomArray(length, max) {
    return Array.apply(null, Array(length)).map(function () {
      return Math.round(Math.random() * max);
    });
  }

  realizarTroca(){
    //TO DO
  }
  
  selecionarCard(i){
    //TO DO
  }

  selecionarCardAux(){
    //TO DO
  }
}
