import { Component, Input, OnInit, ViewChild, ViewEncapsulation, OnChanges, DoCheck } from '@angular/core';
import { Employee } from '../../../classes/employee';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-employee-list-material',
  templateUrl: './employee-list-material.component.html',
  styleUrls: ['./employee-list-material.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeeListMaterialComponent implements OnInit, OnChanges, DoCheck {

  @Input() employeeList: Employee[];
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<Employee>;
  displayedColumns: string[] = ['id', 'name', 'position', 'dateOfBirth', 'hireDate', 'address', 'city', 'country'];

  constructor() {}

  ngOnChanges() {
    this.dataSource = new MatTableDataSource<Employee>(this.employeeList);
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Employee>(this.employeeList);
    this.sort.start = 'desc';
  }

  ngDoCheck() {
    if (this.employeeList) {
      this.dataSource = new MatTableDataSource<Employee>(this.employeeList);
      this.dataSource.sort = this.sort;
    }
  }
}


