import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  title = 'trabalhoConclusaoCurso';
  // indHome: boolean;
  // event$

  constructor(private router: Router) {
    // this.indHome = false;
    // this.obtemUrl();
  }

  // obtemUrl() {
  //   this.event$ = this.router.events
  //       .subscribe(
  //         (event: NavigationEvent) => {
  //           if (event instanceof NavigationStart) {
  //           console.log("path", event.url);
  //             if(event.url == '/') {
  //               console.log("home")
  //               this.indHome = true;
  //             }
  //           }
  //         });

  // }

 

  ngOnDestroy() {
    // this.event$.unsubscribe();
  }



}
