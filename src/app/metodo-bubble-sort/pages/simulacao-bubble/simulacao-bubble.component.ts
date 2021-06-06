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
  
  mensagem: string;
  aux: "";
  direita = 1; //guarda a posição da carta!
  esquerda = 0;
  posCardSelecionado:  number;
  valorCardSelecionado: number;

  indSequenciaCriada: boolean;
  indDadosForm: boolean;
  indAuxiliarCriada: boolean;
  indCardSelecionado: boolean;

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
    this.indCardSelecionado = false;
   
  }

  ngOnInit(): void {
  }


  criarSequenciaNumerica(formCriaSequencia) {
    let dadosForm = formCriaSequencia.form.value;

    this.randArray = this.randomArray(Number(dadosForm.tamanho), 9);
    //console.log("array: ", this.randomArray(Number(dadosForm.tamanho), 9));
    this.indDadosForm = true;
    formCriaSequencia.form.reset();
    this.indSequenciaCriada = true;
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

  criarVariavelAuxiliar() {
    this.indAuxiliarCriada = true;

  }

  limpar() {
    this.randArray = null;
    this.indDadosForm = false;
    this.indAuxiliarCriada = false;
    this.indSequenciaCriada = false;
    this.mensagem = "";
    this.aux = "";

  }

  isOrdenado(): boolean {
    //comparar pos esquerda e direita
    if (this.randArray[this.direita] > this.randArray[this.esquerda]) {
      return true;
    }
    else {
      return false;
    }
  }

  realizarTroca(): void {
    //jogar valor da posição direita na esquerda
    this.randArray[this.esquerda] = this.randArray[this.direita];
  }

  moveParaVetor(): void {
    //jogar valor da auxiliar para posição direita
    this.randArray[this.direita] = this.aux;
  }

  moverParaAuxiliar(posCardSelecionado): void {
    // verificar se o valor recebido está na posição esquerda ou direita
    //       se for direita => disclaimer (não pode mover por fins educativos)
    //       se for esquerda = > chama função isOrdenado( )
    //           se retorno da função isOrdenado == true = > modal informa que ja está ordenado
    //           se retorno da função isOrdenado == false => colocar valorDaPos em aux

    if (posCardSelecionado == this.direita) {
      this.mensagem = "numa situaçaõ real pode mover qlquer uma, mas para explicar aqui está restrita uma só";
    }
    else {

      let res = this.isOrdenado();

      if (res) {
        this.mensagem = "já está ordenado";
      }
      else {
        this.aux = this.randArray[posCardSelecionado]
      }

    }

  }

  avancar(): void {
    this.indCardSelecionado = false;
    // verificar se todo o vetor está ordenado, se sim => modal feliz
    // se não, chamar isOrdenado
    //     se true => verificar se pos dir + 1 = tam
    //                 se true => esq = 0, dir = 1
    //                 se false => esq++ dir++
        // se false modal não pode avançar, ordene.         
    
    if (this.verificarOrdenacao()) {
      this.mensagem = "acertô miseravi"
      console.log("vetor ordenado");
    }
    else if (this.isOrdenado()){
      console.log("carta ordenada")
      // verificar se pos dir + 1 = tam
      if (this.direita + 1 == this.randArray.length){
        this.esquerda = 0;
        this.direita = 1;
      }
      else{
        this.esquerda++;
        this.direita++;
      }
    }
    else {
      this.mensagem = "não pode avançar, ordene!";
      console.log(this.mensagem);
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

  selecionarCard(i) : void {
    this.posCardSelecionado = i;
    this.valorCardSelecionado = this.randArray[i];
    let element = document.getElementById(i);
    element.className = 'cardSelecionado';
    this.indCardSelecionado = true;
  }


  isCardSelecionado(i): void {}
 

}
