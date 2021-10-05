import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutBubbleSortComponent } from './pages/about-bubble-sort/about-bubble-sort.component';
import { ExerciciosBubbleSortComponent } from './pages/exercicios-bubble-sort/exercicios-bubble-sort.component';



@NgModule({
  declarations: [
    AboutBubbleSortComponent,
    ExerciciosBubbleSortComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class MetodoBubbleSortModule { }
