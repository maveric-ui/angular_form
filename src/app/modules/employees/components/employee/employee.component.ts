import { Component, OnInit, OnDestroy } from '@angular/core';
import { Employee } from '../../classes/employee';
import { EmployeesDataService } from '../../services/employees-data.service';
import { Subscription } from 'rxjs';
import { FilterService } from '../../../main/services/filter.service';
import {EmployeeAddFormComponent} from './employee-add-form/employee-add-form.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.less']
})

export class EmployeeComponent implements OnInit, OnDestroy {

  public employees: Employee[];
  private subscription: Subscription;
  public isSignIn: boolean;

  constructor(private employeesDataService: EmployeesDataService, private filterService: FilterService,  public dialog: MatDialog) { }


  ngOnInit() {
    this.getEmployeeData();
    this.isSignIn = false;
    this.filterEmployeeList();
  }

  filterEmployeeList() {
    this.subscription = this.filterService.emitChnages$.subscribe( (searchValue) => {
      this.subscription = this.employeesDataService.filterEmployees(searchValue)
        .subscribe((data: Employee[]) => {this.employees = data; });
    });
  }

  getEmployeeData() {
    this.subscription = this.employeesDataService.getEmployees()
      .subscribe((data: Employee[]) => { this.employees = data; });
  }

  pushEmployee(newEmployee: Employee) {
    this.subscription = this.employeesDataService.addEmployee(newEmployee)
      .subscribe(employee => { this.employees.push(employee); });
  }

  openNewEmployeeFrom() {
    this.dialog.open(EmployeeAddFormComponent, {autoFocus: false});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
