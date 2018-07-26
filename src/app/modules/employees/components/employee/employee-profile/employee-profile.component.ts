import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.less']
})
export class EmployeeProfileComponent implements OnInit {

  loggedUser = 'Gerard Butler';
  dropdownState: boolean;

  constructor() { }

  ngOnInit() {
  }

  onDropDown() {
    this.dropdownState = !this.dropdownState;
  }

}
