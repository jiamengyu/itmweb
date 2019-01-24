import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'itm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fade', [
      state('void', style({opacity: 0})),
      transition(':enter', [ animate(300)]),
      transition(':leave', [ animate(500)])
    ])
  ]
})
export class HomeComponent implements OnInit {
  public myVar: string;

  constructor(@Inject(DOCUMENT) document) { }

  ngOnInit() {
    this.myVar = 'C';
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e){

    let element = document.getElementById('navbar');
    if (window.pageYOffset >30){
      element.classList.add('sticky');
    } else {
      element.classList.remove('sticky');
    }
  }
}
