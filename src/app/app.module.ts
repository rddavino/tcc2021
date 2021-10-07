import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeCardComponent } from './welcome-card/welcome-card.component';
import { SimulacaoBubbleComponent } from './metodo-bubble-sort/pages/simulacao-bubble/simulacao-bubble.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutBubbleSortComponent } from './metodo-bubble-sort/pages/about-bubble-sort/about-bubble-sort.component';
import { ExerciciosBubbleSortComponent } from './metodo-bubble-sort/pages/exercicios-bubble-sort/exercicios-bubble-sort.component';
import { SharedModule } from './shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { SimulacaoInsertionComponent } from './metodo-insertion-sort/pages/simulacao-insertion/simulacao-insertion.component';
import { AboutInsertionComponent } from './metodo-insertion-sort/pages/about-insertion/about-insertion.component';
import { ExerciciosInsertionComponent } from './metodo-insertion-sort/pages/exercicios-insertion/exercicios-insertion.component';
import { SimulacaoQuickComponent } from './metodo-quick-sort/pages/simulacao-quick/simulacao-quick.component';
import { AboutQuickComponent } from './metodo-quick-sort/pages/about-quick/about-quick.component';
import { ExerciciosQuickComponent } from './metodo-quick-sort/pages/exercicios-quick/exercicios-quick.component';
import { SimulacaoSelectionComponent } from './metodo-selection-sort/pages/simulacao-selection/simulacao-selection.component';
import { AboutSelectionComponent } from './metodo-selection-sort/pages/about-selection/about-selection.component';
import { ExerciciosSelectionComponent } from './metodo-selection-sort/pages/exercicios-selection/exercicios-selection.component';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'simulacao-bubble', component: SimulacaoBubbleComponent },
  { path: 'about-bubble-sort', component: AboutBubbleSortComponent},
  { path: 'exercicios-bubble-sort', component: ExerciciosBubbleSortComponent},

  { path: 'simulacao-insertion', component: SimulacaoInsertionComponent },
  { path: 'about-insertion-sort', component: AboutInsertionComponent},
  { path: 'exercicios-insertion-sort', component: ExerciciosInsertionComponent},
  
  { path: 'simulacao-quick', component: SimulacaoQuickComponent },
  { path: 'about-quick-sort', component: AboutQuickComponent},
  { path: 'exercicios-quick-sort', component: ExerciciosQuickComponent},

  { path: 'simulacao-selection', component: SimulacaoSelectionComponent },
  { path: 'about-selection-sort', component: AboutSelectionComponent},
  { path: 'exercicios-selection-sort', component: ExerciciosSelectionComponent},

  { path: 'home', component: HomeComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    WelcomeCardComponent,
    SimulacaoBubbleComponent,
    AboutBubbleSortComponent,
    SimulacaoSelectionComponent,
    AboutSelectionComponent,
    ExerciciosBubbleSortComponent,
    HomeComponent,
    FooterComponent,
  
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-center',
      easing: 'ease-in',
      easeTime: 300,
      progressBar: true,
      progressAnimation: 'decreasing',
      
    }),
    RouterModule.forRoot(routes),
    ModalModule,
    
  ],
 
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
