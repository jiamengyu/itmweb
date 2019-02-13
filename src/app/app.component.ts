import { Component, OnInit } from '@angular/core';
import {faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'itm-portal',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class ITMWebComponent implements OnInit {

  /*
  constructor (
    private userService: UserService
  ) {};
*/
  title = 'IT Consultant Portal';
  faCoffee = faCoffee;
  
  ngOnInit(){
//    this.userService.populate();
  }
}
