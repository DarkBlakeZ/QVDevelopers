import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navBar',
  templateUrl: './navBar.component.html',
  styleUrls: ['./navBar.component.css']
})
export class NavBarComponent implements OnInit {
  
  nombre: string = '';

  constructor() { 
    this.nombre = localStorage.getItem('nombre') || '';
  }

  ngOnInit() {
  }

}
