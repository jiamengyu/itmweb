import { Component, OnInit, Input } from '@angular/core';
import { Errors } from '../../core';

@Component({
  selector: 'itm-list-errors',
  templateUrl: './list-errors.component.html',
  styleUrls: ['./list-errors.component.scss']
})
export class ListErrorsComponent implements OnInit {
  formattedErrors: Array<string> = [];

  constructor() { }

  ngOnInit() {
  }

  @Input()
  set errors(errorList: Errors) {
    this.formattedErrors = Object.keys(errorList.errors || {})
      .map(key => `${key} ${errorList.errors[key]}`);
  }

  get errorList() { return this.formattedErrors; }
}


