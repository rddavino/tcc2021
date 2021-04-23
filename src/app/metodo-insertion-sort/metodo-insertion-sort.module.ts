import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimulacaoInsertionComponent } from './pages/simulacao-insertion/simulacao-insertion.component';
import { AboutInsertionComponent } from './pages/about-insertion/about-insertion.component';
import { ExerciciosInsertionComponent } from './pages/exercicios-insertion/exercicios-insertion.component';



@NgModule({
  declarations: [
    SimulacaoInsertionComponent,
    AboutInsertionComponent,
    ExerciciosInsertionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MetodoInsertionSortModule { }
