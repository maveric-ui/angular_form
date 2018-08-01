import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../../classes/employee';
import { MatDialog } from '@angular/material';
import { EmployeeReactiveFormComponent } from '../employee-reactive-form/employee-reactive-form.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.less']
})
export class EmployeeListComponent implements OnInit {

  @Input() public employeeList: Employee[];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  public openNewEmployeeFrom() {
    this.dialog.open(EmployeeReactiveFormComponent, {autoFocus: false});
  }
}
