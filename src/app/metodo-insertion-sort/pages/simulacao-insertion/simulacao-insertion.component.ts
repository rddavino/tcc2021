import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalRef, ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-simulacao-insertion',
  templateUrl: './simulacao-insertion.component.html',
  styleUrls: ['./simulacao-insertion.component.css']
})
export class SimulacaoInsertionComponent implements OnInit {

  // @ViewChild('modalTeste', { static: false }) modalTeste: ModalDirective;

  @ViewChild('modalCriarSequencia', { static: false }) modalCriarSequencia: ModalDirective;
  
  @ViewChild('modalAreaEmConstrucao', { static: false }) modalAreaEmConstrucao: ModalDirective;


  randArray: any[];
  collapseCardTitulo = "Objetivos";
  modalRef: BsModalRef;

  mensagemInfo: string;
  mensagemAlerta: string;
  mensagemAtencao: string;
  aux = null;
  direita = 1; //guarda a posição da carta!
  esquerda = 0;
  isCardSelecionado = false;
  isCardAuxSelecionado = false;
  posCardSelecionado: number;
  valorCardSelecionado: number;
  isVetorOrdenado = false;
  isTrocaRealizada: boolean;

  indSequenciaCriada: boolean;
  indDadosForm: boolean;
  indAuxiliarCriada: boolean;
  indCardSelecionado = [];
  isCardAuxiliarClicada: boolean;

  dadosForm;

  constructor() { }

  ngOnInit(): void {
  }

  criarSequenciaNumerica(formCriaSequencia) {

    this.isVetorOrdenado = false;

    this.dadosForm = formCriaSequencia.form.value;

    let tamanho = this.dadosForm.tamanho;

    if (tamanho < 3) {
      this.limparMensagem();
      this.mensagemAtencao = "O vetor deve ter no mínimo 3 elementos."
      //this.toastr.error(this.mensagemAtencao);
      return;
    }

    this.randArray = this.randomArray(Number(tamanho), 9);
    this.randArray.sort(() => Math.random() - 0.5);

    if (tamanho != '' || tamanho != 0) {
      this.indDadosForm = true;
      formCriaSequencia.form.reset();
      this.indSequenciaCriada = true;
      this.fecharModalCriarSequencia();


      return this.randArray;

    }


  }

  randomArray(length, max) {
    return Array.apply(null, Array(length)).map(function () {
      return Math.round(Math.random() * max);
    });
  }

  criarVariavelAuxiliar() {
    this.mensagemInfo = "";
    this.mensagemAlerta = "";
    this.indAuxiliarCriada = true;
  }

  limpar() {
    this.randArray = null;
    this.indDadosForm = false;
    this.indAuxiliarCriada = false;
    this.isTrocaRealizada = false;
    this.indSequenciaCriada = false;
    this.esquerda = 0;
    this.direita = 1;
    this.isCardSelecionado = false;
    this.aux = null;
    this.limparMensagem();
  }

  isOrdenado(): boolean {
    //comparar pos esquerda e direita
    if (this.randArray[this.direita] >= this.randArray[this.esquerda]) {
      return true;
    }
    else {
      return false;
    }
  }

  realizarTroca(): void {
    //jogar valor da posição direita na esquerda
    // if (this.aux == null) {
    //   this.limparMensagem();
    //   this.mensagemAlerta = "Se você realizar a troca antes de mover para a variável auxiliar, o valor será perdido."
    //   this.toastr.warning(this.mensagemAlerta);

    //   return;
    // }

    // if (this.isTrocaRealizada) {
    //   this.limparMensagem();
    //   this.mensagemAlerta = "Troca já realizada."
    //   this.toastr.warning(this.mensagemAlerta);
    //   return;
    // }

    // if (!this.isCardSelecionado) {
    //   this.limparMensagem();
    //   this.mensagemAtencao = "Selecione uma carta para realizar a troca";
    //   this.toastr.error(this.mensagemAtencao);
    //   return;
    // }

    // if (this.posCardSelecionado == this.esquerda) {
    //   this.limparMensagem();
    //   this.mensagemAtencao = "Qualquer uma das posições poderia ser utilizada na troca. Aqui, para fins educativos, limitamos a troca da direita para esquerda.";
    //   this.toastr.error(this.mensagemAtencao);
    //   return;
    // }

    // this.randArray[this.esquerda] = this.randArray[this.direita];
    // this.isTrocaRealizada = true;
  }

  moverParaAuxiliar(posCardSelecionado): void { }


  verificarOrdenacao(): boolean {
    var isOrdenado = true;
    for (var j = 0; j < this.randArray.length - 1; j++) {
      if (this.randArray[j] > this.randArray[j + 1]) {
        isOrdenado = false;
        break;
      }
    }
    return isOrdenado;
  }

  selecionarCard(i): void {

  }

  isCartaSelecionada(i): void {
    let element = document.getElementById(i);
    element.className = 'elementoVetor elementoVetorSelecionado';
  }

  isCartaAberta(i): void {
    let element = document.getElementById(i);
    // element.className = 'cardAberto';
    element.className = 'elementoVetor elementoVetorAberto';

  }


  limparMensagem(): void {
    this.mensagemInfo = "";
    this.mensagemAlerta = "";
    this.mensagemAtencao = "";
  }

  abrirCartas(): void {
    this.isCartaAberta(this.esquerda);
    this.isCartaAberta(this.direita);
  }

  fecharCartas(i): void {
    let element = document.getElementById(i);
    // element.className = 'card col-12 p-2 mr-4 bg-info text-info arrayCard myArrayElement';
    element.className = 'elementoVetor';
  }

  selecionarCardAux(): void {
    let element = document.getElementById("cardAux");

    if (this.isCardAuxSelecionado) {
      element.className = 'elementoVetor elementoAuxiliar';
    } else {
      element.className = 'elementoVetor elementoVetorSelecionado';
    }

    this.isCardAuxSelecionado = !this.isCardAuxSelecionado;
  }

  // fecharModalVetorOrdenado() {
  //   this.modalTeste.hide();
  // }

  fecharModalCriarSequencia() {
    this.modalCriarSequencia.hide();
  }

  abrirModalCriarSequencia() {
    this.modalCriarSequencia.show();
  }

  fecharModalAreaEmConstrucao() {
    this.modalAreaEmConstrucao.hide();
  }

  abrirModalAreaEmConstrucao() {
    this.modalAreaEmConstrucao.show();
  }

}
