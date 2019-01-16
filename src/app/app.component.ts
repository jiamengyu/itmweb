import { Component, OnInit } from '@angular/core';
import { UserService } from './core';

@Component({
  selector: 'itm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor (
    private userService: UserService
  ) {};

  title = 'IT Consultant Portal';

  ngOnInit(){
    this.userService.populate();
  }
}
