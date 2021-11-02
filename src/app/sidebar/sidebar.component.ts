import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  indSemSidebar: boolean;
  event$

  constructor(private router: Router) {
    this.indSemSidebar = false;
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
              if(event.url == '/' || event.url == '/importancia-metodos-ordenacao') {
                this.indSemSidebar = true;
               
              } else {
                this.indSemSidebar = false;
              }
            }
          });

  }

 

  ngOnDestroy() {
    this.event$.unsubscribe();
  }

 
}
