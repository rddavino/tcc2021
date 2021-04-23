import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimulacaoQuickComponent } from './pages/simulacao-quick/simulacao-quick.component';
import { AboutQuickComponent } from './pages/about-quick/about-quick.component';
import { ExerciciosQuickComponent } from './pages/exercicios-quick/exercicios-quick.component';



@NgModule({
  declarations: [
    SimulacaoQuickComponent,
    AboutQuickComponent,
    ExerciciosQuickComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MetodoQuickSortModule { }
