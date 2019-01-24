import { Component, OnInit } from '@angular/core';

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

  ngOnInit(){
//    this.userService.populate();
  }
}
