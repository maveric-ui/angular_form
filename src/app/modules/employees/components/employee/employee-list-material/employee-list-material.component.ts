import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation,
  SimpleChanges,
  OnChanges
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
  @ViewChild(MatSort) sort: MatSort;
  // dataSource: DataTableDataSource;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'name', 'position', 'dateOfBirth', 'hireDate', 'address', 'city', 'country'];

  constructor( ) {}

  ngOnChanges(changes: SimpleChanges) {
    const changedValue = changes['employeeList'];
    if (changedValue) {
      // this.dataSource = new DataTableDataSource( this.sort, this.employeeList );
      this.dataSource = new MatTableDataSource<any>(this.employeeList);
      this.dataSource.sort = this.sort;
    }
  }

  ngOnInit() {
    this.sort.start = 'desc';
    // this.dataSource = new DataTableDataSource( this.sort, this.employeeList );
    // this.dataSource = new MatTableDataSource(this.employeeList);
  }
}


