import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation,
  OnChanges, DoCheck, SimpleChange
} from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Employee } from '../../../classes/employee';
import { MatDialog, MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';
import { EmployeeDataSource } from './data-table-datasource';


@Component({
  selector: 'app-employee-list-material',
  templateUrl: './employee-list-material.component.html',
  styleUrls: ['./employee-list-material.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeeListMaterialComponent implements OnInit, OnChanges, DoCheck {

  @Input() employeeList: Employee[];
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new EmployeeDataSource(this.sort, this.employeeList);
  displayedColumns: string[] = ['id', 'name', 'position', 'dateOfBirth', 'hireDate', 'address', 'city', 'country'];


  constructor() {}

  ngOnChanges() {
    this.dataSource = new EmployeeDataSource(this.sort, this.employeeList);
    // this.dataSource = new MatTableDataSource<any>(this.employeeList);
    // this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    // this.sort.start = 'desc';
    this.dataSource = new EmployeeDataSource(this.sort, this.employeeList);
    // this.dataSource = new MatTableDataSource<any>(this.employeeList);
  }

  ngDoCheck() {
    // this.dataSource = new MatTableDataSource(this.employeeList);
    // this.dataSource = new MatTableDataSource<any>(this.employeeList);
    // this.dataSource.sort = this.sort;
  }
}


