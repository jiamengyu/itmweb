import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'itm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isSticky: boolean = false;
  title = 'ITMercenaries Portal';
  
  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 250;
    
  }

}
