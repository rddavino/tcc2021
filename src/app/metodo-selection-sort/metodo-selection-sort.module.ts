import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimulacaoSelectionComponent } from './pages/simulacao-selection/simulacao-selection.component';
import { AboutSelectionComponent } from './pages/about-selection/about-selection.component';
import { ExerciciosSelectionComponent } from './pages/exercicios-selection/exercicios-selection.component';
import { NavbarComponent } from '../navbar/navbar.component';



@NgModule({
  declarations: [
    SimulacaoSelectionComponent,
    AboutSelectionComponent,
    ExerciciosSelectionComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    
  ]
})
export class MetodoSelectionSortModule { }
