import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  constructor(
    private router: Router, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  redirecionarParaHome() {
    this.router.navigate(['/']);
  }
}
