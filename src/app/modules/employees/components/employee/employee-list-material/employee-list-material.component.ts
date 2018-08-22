import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges
} from '@angular/core';
import { Employee } from '../../../classes/employee';
import { MatDialog, MatSort, MatTableDataSource } from '@angular/material';
import { EmployeeAddFormComponent } from '../employee-add-form/employee-add-form.component';
import { DataTableDataSource } from './data-table-datasource';
import { EmployeesDataService } from '../../../services/employees-data.service';


@Component({
  selector: 'app-employee-list-material',
  templateUrl: './employee-list-material.component.html',
  styleUrls: ['./employee-list-material.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeeListMaterialComponent implements OnInit, OnChanges {

  @Input() employeeList: Employee[];
  @Output() public sendNewEmployee: EventEmitter<Employee> = new EventEmitter<Employee>();
  @ViewChild(MatSort) sort: MatSort;
  dataSource: DataTableDataSource;
  displayedColumns: string[] = ['id', 'name', 'position', 'dateOfBirth', 'hireDate', 'address', 'city', 'country'];

  constructor( public dialog: MatDialog, private employeesDataService: EmployeesDataService ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['employeeList']) {
      this.dataSource = new DataTableDataSource( this.employeesDataService, this.sort, this.employeeList );
    }
  }

  ngOnInit() {
    // this.dataSource = new DataTableDataSource(this.employeesDataService, this.sort, this.employeeList);
  }

  openNewEmployeeFrom() {
    this.dialog.open(EmployeeAddFormComponent, {autoFocus: false}
      )
      .afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      this.sendNewEmployee.emit(result);
      this.dataSource.addData(result);
    });
  }
}


