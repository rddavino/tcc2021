import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-simulacao-selection',
  templateUrl: './simulacao-selection.component.html',
  styleUrls: ['./simulacao-selection.component.css']
})
export class SimulacaoSelectionComponent implements OnInit {

  indSequenciaCriada;
  indAuxiliarCriada;
  indMinCriada;
  indDadosForm;
  posCardSelecionado: number;
  valorCardSelecionado: number;

  isVetorOrdenado;

  mensagemAlerta;
  mensagemAtencao;
  mensagemInfo;

  randArray;
  last;
  isCardSelecionado;
  min;
  aux;

  direita = 1; //guarda a posição da carta!
  esquerda = 0;

  constructor(
    private toastr: ToastrService,
  ) {  }

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
    window.setTimeout(() => this.isCartaAberta(0), 500);
    
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
    this.mensagemInfo = "";
    this.mensagemAlerta = "";
    this.indAuxiliarCriada = true;
  }

  criarVariavelMin() {
    this.indMinCriada = true;
    //abrir card da primeira pos. 

    //fazer min receber o valor dele
  }

  limpar() {
    this.randArray = null;
    this.indDadosForm = false;
    this.indAuxiliarCriada = false;
    this.indMinCriada = false;
    this.indSequenciaCriada = false;
    // this.esquerda = 0;
    // this.direita = 1;
    this.isCardSelecionado = false;
    this.aux = null;
    this.limparMensagem();
  }

  limparMensagem() {
    //TO DO
  }

  moverParaAuxiliar(posCardSelecionado): void {
    // verificar se o valor recebido está na posição esquerda ou direita
    //       se for direita => disclaimer (não pode mover por fins educativos)
    //       se for esquerda = > chama função isOrdenado( )
    //           se retorno da função isOrdenado == true = > modal informa que ja está ordenado
    //           se retorno da função isOrdenado == false => colocar valorDaPos em aux

    if (!this.isCardSelecionado) {
      this.limparMensagem();
      this.mensagemAtencao = "Selecione uma carta para mover para auxiliar";
      this.toastr.error(this.mensagemAtencao);

      return;
    }

    if (posCardSelecionado == this.direita) {
      if (this.isOrdenado()) {
        this.limparMensagem();
        this.mensagemInfo = "Os elementos das duas posições adjacentes já estão ordenados.";
        this.toastr.info(this.mensagemInfo);

      }
      else {
        this.limparMensagem();
        this.mensagemAtencao = "Qualquer uma das posições poderia ter o seu valor movido para a variável auxiliar. Aqui, para fins educativos, limitamos a movimentação somente do valor da posição à esquerda.";
        this.toastr.error(this.mensagemAtencao);

      }
    }
    else {

      let res = this.isOrdenado();

      if (res) {
        this.limparMensagem();
        this.mensagemInfo = "Os elementos das duas posições adjacentes já estão ordenados.";
        this.toastr.info(this.mensagemInfo);

      }
      else {
        this.aux = this.randArray[posCardSelecionado]
      }

    }
  }

  moverParaMenor() {
    // verificar se o valor recebido está na posição esquerda ou direita
    //       se for direita => disclaimer (não pode mover por fins educativos)
    //       se for esquerda = > chama função isOrdenado( )
    //           se retorno da função isOrdenado == true = > modal informa que ja está ordenado
    //           se retorno da função isOrdenado == false => colocar valorDaPos em aux
    if (!this.isCardSelecionado) {
      this.limparMensagem();
      this.mensagemAtencao = "Selecione uma carta para mover para menor";
      this.toastr.error(this.mensagemAtencao);

      return;
    }

    this.min = this.randArray[this.posCardSelecionado]
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
  
  selecionarCard(i): void {
    if (this.isVetorOrdenado == true) {
      return;
    }

    if (!this.indAuxiliarCriada) {
      this.limparMensagem();
      this.mensagemAlerta = "Antes de tentar ordernar o vator, crie uma variável auxiliar."
      this.toastr.warning(this.mensagemAlerta);
      return;
    }

    if (this.posCardSelecionado != null && i != this.posCardSelecionado) {
      let cartaASerAberta = (i == this.direita) ? i - 1 : i + 1;
      this.isCartaAberta(cartaASerAberta);
      this.isCardSelecionado = true;
    } else {
      this.isCardSelecionado = !this.isCardSelecionado;
    }

    this.posCardSelecionado = i;
    this.valorCardSelecionado = this.randArray[i];
    this.isCartaSelecionada(i);
  }
  
  isCartaSelecionada(i): void {
    let element = document.getElementById(i);
    element.className = 'elementoVetor elementoVetorSelecionado';
  }

  selecionarCardAux(){
    //TO DO
  }

  isCartaAberta(i): void {
    let element = document.getElementById(i);
    // element.className = 'cardAberto';
    element.className = 'elementoVetor elementoVetorAberto';

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
}
