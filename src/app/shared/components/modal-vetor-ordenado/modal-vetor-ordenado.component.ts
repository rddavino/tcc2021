import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BsModalService, ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-vetor-ordenado',
  templateUrl: './modal-vetor-ordenado.component.html',
  styleUrls: ['./modal-vetor-ordenado.component.css']
})
export class ModalVetorOrdenadoComponent implements OnInit, AfterViewInit {

  // @ViewChild(ModalDirective) modal: ModalDirective;
  @ViewChild("modal", {static: false}) modal: ModalDirective;


  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  abrirModal(){
    // this.modal.show()
    this.modalService.show(ModalVetorOrdenadoComponent);
  }
  
  fecharModal() {
    this.modal.hide();
  }

  redirecionarParaExercicio() {

  }

  
}
