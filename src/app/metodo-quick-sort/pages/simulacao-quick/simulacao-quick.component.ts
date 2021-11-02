import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-simulacao-quick',
  templateUrl: './simulacao-quick.component.html',
  styleUrls: ['./simulacao-quick.component.css']
})
export class SimulacaoQuickComponent implements OnInit {

  @ViewChild('modalAreaEmConstrucao', { static: false }) modalAreaEmConstrucao: ModalDirective;
  indSequenciaCriada;
  
  constructor() { }

  ngOnInit(): void {
  }

  fecharModalAreaEmConstrucao() {
    this.modalAreaEmConstrucao.hide();
  }

  abrirModalAreaEmConstrucao() {
    this.modalAreaEmConstrucao.show();
  }
}
