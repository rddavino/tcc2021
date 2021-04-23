import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardHomeComponent } from './components/card-home/card-home.component';
import { CardCartaComponent } from './components/card-carta/card-carta.component';
import { HeaderSimulacaoComponent } from './components/header-simulacao/header-simulacao.component';
import { CollapseCardObjetivoComponent } from './components/collapse-card/collapse-card-objetivo.component';
import { ModalCriarSequenciaComponent } from './components/modal-criar-sequencia/modal-criar-sequencia.component';



@NgModule({
  declarations: [
    CardHomeComponent,
    CardCartaComponent,
    HeaderSimulacaoComponent,
    CollapseCardObjetivoComponent,
    ModalCriarSequenciaComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardHomeComponent,
    CardCartaComponent,
    HeaderSimulacaoComponent,
    CollapseCardObjetivoComponent,
  ]
})
export class SharedModule { }
