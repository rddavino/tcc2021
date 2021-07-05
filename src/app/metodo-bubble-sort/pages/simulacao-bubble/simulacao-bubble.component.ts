import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-simulacao-bubble',
  templateUrl: './simulacao-bubble.component.html',
  styleUrls: ['./simulacao-bubble.component.css']
})
export class SimulacaoBubbleComponent implements OnInit {

  randArray: any[];
  collapseCardTitulo = "Objetivos";
  
  mensagemInfo: string;
  mensagemAlerta: string;
  mensagemAtencao: string;
  aux = null;
  direita = 1; //guarda a posição da carta!
  esquerda = 0;
  isCardSelecionado = false;
  isCardAuxSelecionado = false;
  posCardSelecionado:  number;
  valorCardSelecionado: number;
  isVetorOrdenado = false;
  isTrocaRealizada: boolean;

  indSequenciaCriada: boolean;
  indDadosForm: boolean;
  indAuxiliarCriada: boolean;
  indCardSelecionado = [];
  isCardAuxiliarClicada: boolean;

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
  ) { 
    this.indSequenciaCriada = false;
    this.indAuxiliarCriada = false;
    this.isTrocaRealizada = false;
    
  }
  
  ngOnInit(): void {
   
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

  randomArray(length, max) {
    return Array.apply(null, Array(length)).map(function () {
      return Math.round(Math.random() * max);
    });
  }

  receberDica() {
    this.toastr.info('Aqui tem uma super dica');
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
    this.indSequenciaCriada = false;
    this.esquerda = 0;
    this.direita = 1;
    this.isCardSelecionado = false;
    this.aux = null;
    this.limparMensagem();
  }

  identify(index) {
    return index;
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
    if(this.aux == null){
      this.mensagemAlerta = "Se você realizar a troca antes de mover para a variável auxiliar, o valor será perdido."
      return;
    }

    if(this.isTrocaRealizada) {
      this.mensagemAlerta = "Troca já realizada."
      return;
    }

    if(!this.isCardAuxSelecionado) {
      this.mensagemAtencao = "Selecione uma carta para realizar a troca";
      return;
    }
    
    if (this.posCardSelecionado == this.esquerda) {
      this.mensagemAtencao = "Qualquer uma das posições poderia ser utilizada na troca. Aqui, para fins educativos, limitamos a troca da direita para esquerda.";
      return;
    }

    this.randArray[this.esquerda] = this.randArray[this.direita];
    this.isTrocaRealizada = true;
  }

  moverParaVetor(): void {
    //jogar valor da auxiliar para posição direita
    if (this.aux == null){
      this.mensagemAlerta = "Se você mover um valor null para o vetor, perderá o vetor original.";
      return;
    }

    if (!this.isTrocaRealizada) {
      this.mensagemAlerta = "Realize a troca antes de mover o valor da auxiliar para o vetor."
      return;
    }

    if (!this.isCardAuxSelecionado) {
      this.mensagemAlerta= "Selecione a variável auxiliar para movê-la para o vetor.";
      return;
    }
    this.randArray[this.direita] = this.aux;
    this.aux = null;
    this.selecionarCardAux();
  }

  moverParaAuxiliar(posCardSelecionado): void {
    // verificar se o valor recebido está na posição esquerda ou direita
    //       se for direita => disclaimer (não pode mover por fins educativos)
    //       se for esquerda = > chama função isOrdenado( )
    //           se retorno da função isOrdenado == true = > modal informa que ja está ordenado
    //           se retorno da função isOrdenado == false => colocar valorDaPos em aux

    if(!this.isCardSelecionado) {
      this.mensagemAtencao = "Selecione uma carta para mover para auxiliar";
      return;
    }

    if (posCardSelecionado == this.direita) {
      if(this.isOrdenado()){
        this.mensagemInfo = "Os elementos das duas posições adjacentes já estão ordenados.";
      }
      else{
        this.mensagemAtencao = "Qualquer uma das posições poderia ter o seu valor movido para a variável auxiliar. Aqui, para fins educativos, limitamos a movimentação somente do valor da posição à esquerda.";
      }
    }
    else {

      let res = this.isOrdenado();

      if (res) {
        this.mensagemInfo = "Os elementos das duas posições adjacentes já estão ordenados.";
      }
      else {
        this.aux = this.randArray[posCardSelecionado]
      }

    }

  }

  avancar(): void {
    // verificar se todo o vetor está ordenado, se sim => modal feliz
    // se não, chamar isOrdenado
    //     se true => verificar se pos dir + 1 = tam
    //                 se true => esq = 0, dir = 1
    //                 se false => esq++ dir++
        // se false modal não pode avançar, ordene.         
    
    if(this.aux !== null){
      this.mensagemAlerta = "Para prosseguir, mova o valor da variável auxiliar para o vetor."
      return;
    }

    if (this.verificarOrdenacao()) {
      this.mensagemInfo = "Vetor ordenado";
      this.randArray.forEach((elm, index) => {
        this.isCartaAberta(index);
      });
      this.isVetorOrdenado = true;
      //console.log("vetor ordenado");
    }
    else if (this.isOrdenado()){
      //console.log("carta ordenada")

      // verificar se pos dir + 1 = tam
      if (this.direita + 1 == this.randArray.length){
        this.fecharCartas(this.esquerda)
        this.fecharCartas(this.direita)

        this.esquerda = 0;
        this.direita = 1;

      }
      else{
        this.fecharCartas(this.esquerda);
        this.esquerda++;
        this.direita++;
      }
      this.abrirCartas();
      this.isTrocaRealizada = false;


      
    }
    else {
      this.mensagemInfo = "Não é possível avançar ainda pois os elementos não estão ordenados!";
    }
  }

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
    if (this.isVetorOrdenado == true) {
      return;
    }

    if(!this.indAuxiliarCriada) {
      this.mensagemAlerta = "Antes de tentar ordernar o vator, crie uma variável auxiliar."
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
    element.className = 'cardSelecionado card col-12 p-2 mr-4';
  }

  isCartaAberta(i): void {
    let element = document.getElementById(i);
    element.className = 'cardAberto';
  }
 
  limparMensagem(): void{
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
    element.className = 'card col-12 p-2 mr-4 bg-info text-info arrayCard myArrayElement';
  }

  selecionarCardAux(): void {
    let element = document.getElementById("cardAux");
    
    if(this.isCardAuxSelecionado){
      element.className = 'card col-12 p-2 mr-4 bg-secondary myArrayElement';
    } else {
      element.className = 'cardSelecionado card col-12 p-2 mr-4';
    }

    this.isCardAuxSelecionado = !this.isCardAuxSelecionado;
  }
}
