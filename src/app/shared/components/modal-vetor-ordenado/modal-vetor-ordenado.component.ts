import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-vetor-ordenado',
  templateUrl: './modal-vetor-ordenado.component.html',
  styleUrls: ['./modal-vetor-ordenado.component.css']
})
export class ModalVetorOrdenadoComponent implements OnInit {

  @ViewChild(ModalDirective) modal: ModalDirective;

  constructor() { }

  ngOnInit(): void {
  }


  abrirModal(){
    this.modal.show()
  }
  
  fecharModal() {

  }

  redirecionarParaExercicio() {

  }

  
}
