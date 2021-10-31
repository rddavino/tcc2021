import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardHomeComponent } from './components/card-home/card-home.component';
import { CardCartaComponent } from './components/card-carta/card-carta.component';
import { CollapseCardObjetivoComponent } from './components/collapse-card/collapse-card-objetivo.component';
import { ModalCriarSequenciaComponent } from './components/modal-criar-sequencia/modal-criar-sequencia.component';
import { ModalVetorOrdenadoComponent } from './components/modal-vetor-ordenado/modal-vetor-ordenado.component';
import { LogoComponent } from './components/logo/logo.component';



@NgModule({
  declarations: [
    CardHomeComponent,
    CardCartaComponent,
    CollapseCardObjetivoComponent,
    ModalCriarSequenciaComponent,
    ModalVetorOrdenadoComponent,
    LogoComponent,

  ],
  imports: [
    CommonModule
  ],

  exports: [
    CardHomeComponent,
    CardCartaComponent,
    CollapseCardObjetivoComponent,
    ModalVetorOrdenadoComponent,
    LogoComponent
  ]
})
export class SharedModule { }
