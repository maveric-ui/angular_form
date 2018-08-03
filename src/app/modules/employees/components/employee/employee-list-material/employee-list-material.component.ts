import { Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Employee } from '../../../classes/employee';
import { MatDialog, MatSort, MatTableDataSource, Sort } from '@angular/material';
import { EmployeeReactiveFormComponent } from '../employee-reactive-form/employee-reactive-form.component';


@Component({
  selector: 'app-employee-list-material',
  templateUrl: './employee-list-material.component.html',
  styleUrls: ['./employee-list-material.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeeListMaterialComponent implements OnInit {

  @Input('employeeList') public employeeList: Employee[];
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['id', 'name', 'dateOfBirth', 'hireDate', 'address', 'city', 'country'];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    // this.employeeList.sort = this.sort;
  }

  public openNewEmployeeFrom() {
    this.dialog.open(EmployeeReactiveFormComponent, {autoFocus: false});
  }

}
