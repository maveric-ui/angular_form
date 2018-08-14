import { Component, OnInit, ViewEncapsulation, DoCheck } from '@angular/core';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeeSearchComponent implements OnInit, DoCheck {

  public isSignIn: boolean;

  constructor() { }

  ngOnInit() {
    this.isSignIn = false;
  }

  ngDoCheck() {
    const userToken = sessionStorage.getItem('userToken');
    if (userToken) {
      this.isSignIn = true;
    }

    if (!userToken) {
      this.isSignIn = false;
    }
  }


}
