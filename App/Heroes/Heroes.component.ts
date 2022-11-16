import {Component, OnInit } from '@angular/core';

@Component({
 selector: 'app-heroes',
 template: './heroes.component.html',
 styleUrl: './heroes.component.css',
})
export class HeroesComponent implements OnInit {
  /*
  hero = 'Windstorm'  
  */
  constructor() { }

  ngOnInit(): void {
  }
  
}