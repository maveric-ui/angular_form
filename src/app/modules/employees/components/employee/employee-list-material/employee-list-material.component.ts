import {Component, Input, OnInit, ViewChild, ViewEncapsulation, Output, EventEmitter, SimpleChanges, OnChanges, DoCheck} from '@angular/core';
import { Employee } from '../../../classes/employee';
import {MatDialog, MatSort, MatTableDataSource, Sort} from '@angular/material';
import { EmployeeAddFormComponent } from '../employee-add-form/employee-add-form.component';

@Component({
  selector: 'app-employee-list-material',
  templateUrl: './employee-list-material.component.html',
  styleUrls: ['./employee-list-material.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeeListMaterialComponent implements OnInit, OnChanges, DoCheck {

  @Input() employeeList: Employee[];
  @Output() public sendNewEmployee: EventEmitter<Employee> = new EventEmitter<Employee>();
  @ViewChild(MatSort) sort: MatSort;
  dataSource;
  displayedColumns: string[] = ['id', 'name', 'position', 'dateOfBirth', 'hireDate', 'address', 'city', 'country'];

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['employeeList']) {
      this.dataSource = new MatTableDataSource(this.employeeList);
      this.dataSource.sort = this.sort;
    }
  }

  ngDoCheck() {
   // this.dataSource = this.employeeList;
  }

  openNewEmployeeFrom() {
    const dialogRef = this.dialog.open(EmployeeAddFormComponent, {autoFocus: false});
    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      } else {
        this.sendNewEmployee.emit(result);
      }
    });
  }

}
