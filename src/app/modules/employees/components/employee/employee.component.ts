import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.less']
})
export class EmployeeComponent implements OnInit {


  readonly images = {
    logo: './../../assets/img/logo.svg',
    table: './../../assets/img/table.svg'
  };

  readonly alts = {
    logo: 'Logo',
    table: 'Table'
  };


  constructor() { }

  ngOnInit() {
  }

}
