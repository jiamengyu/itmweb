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
    let element = document.getElementById('itm-header');
    if (window.pageYOffset >50){
      element.classList.add('itm-header');
    } else {
      element.classList.remove('itm-header');
    }
  }
  
}
