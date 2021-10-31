import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  indHome: boolean;
  event$

  constructor(private router: Router) {
    this.indHome = false;
  }

  ngOnInit(): void {
    this.obtemUrl();
  }

  obtemUrl() {
    this.event$ = this.router.events
        .subscribe(
          (event: NavigationEvent) => {
            if (event instanceof NavigationStart) {
            console.log("path", event.url);
              if(event.url == '/') {
                console.log("home")
                this.indHome = true;
                console.log(this.indHome);
                console.log("AQUI!");
              } else {
                this.indHome = false;
              }
            }
          });

  }

 

  ngOnDestroy() {
    this.event$.unsubscribe();
  }

 
}
