import {Component, Input, OnInit, ViewChild, ViewEncapsulation, OnChanges, SimpleChanges} from '@angular/core';
import { Employee } from '../../../classes/employee';
import { MatDialog, MatSort, MatTableDataSource, Sort } from '@angular/material';
import { EmployeeReactiveFormComponent } from '../employee-reactive-form/employee-reactive-form.component';


@Component({
  selector: 'app-employee-list-material',
  templateUrl: './employee-list-material.component.html',
  styleUrls: ['./employee-list-material.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeeListMaterialComponent implements OnInit, OnChanges  {

  @Input() public employeeList: Employee[];
  public soursData;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['id', 'name', 'position', 'dateOfBirth', 'hireDate', 'address', 'city', 'country'];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['employeeList']) {
      this.soursData = new MatTableDataSource(this.employeeList);
      this.soursData.sort = this.sort;
    }
  }


  public openNewEmployeeFrom() {
    this.dialog.open(EmployeeReactiveFormComponent, {autoFocus: false});
  }

}
