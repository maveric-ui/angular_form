import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.less']
})
export class EmployeeSearchComponent implements OnInit {

  readonly imgSearch = './../../assets/img/search.svg';
  readonly altSearch = 'search';

  constructor() { }

  ngOnInit() {
  }

}
