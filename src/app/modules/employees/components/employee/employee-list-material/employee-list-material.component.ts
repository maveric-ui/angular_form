import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
  OnDestroy
} from '@angular/core';
import { Employee } from '../../../classes/employee';
import { MatDialog, MatSort, MatTableDataSource } from '@angular/material';
import { EmployeeAddFormComponent } from '../employee-add-form/employee-add-form.component';
import { DataTableDataSource } from './data-table-datasource';
import { Subscription } from 'rxjs';

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

  constructor( ) {}

  ngOnChanges(changes: SimpleChanges) {
    const changedValue = changes['employeeList'];
    if (changedValue) {
      this.dataSource = new DataTableDataSource( this.sort, this.employeeList );
    }
  }

  ngOnInit() {
    this.dataSource = new DataTableDataSource( this.sort, this.employeeList );
  }
}


