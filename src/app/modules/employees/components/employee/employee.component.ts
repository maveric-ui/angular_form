import {Component, OnInit, OnDestroy, OnChanges, SimpleChanges} from '@angular/core';
import {Employee} from '../../classes/employee';
import {EmployeesDataService} from '../../services/employees-data.service';
import {Subscription} from 'rxjs';
import {FilterService} from '../../../main/services/filter.service';
import {EmployeeAddFormComponent} from './employee-add-form/employee-add-form.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.less']
})

export class EmployeeComponent implements OnInit, OnChanges, OnDestroy {

  public employees: Employee[];
  private subscription: Subscription;
  public isSignIn: boolean;

  constructor(private employeesDataService: EmployeesDataService,
              private filterService: FilterService,
              public dialog: MatDialog) {
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      const chng = changes[propName];
      const cur  = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

  ngOnInit() {
    this.getEmployeeData();
    this.isSignIn = false;
    this.filterEmployeeList();
  }

  filterEmployeeList() {
    this.subscription = this.filterService.emitChnages$.subscribe((searchValue) => {
      this.subscription = this.employeesDataService.filterEmployees(searchValue)
        .subscribe((data: Employee[]) => {
          this.employees = data;
        });
    });
  }

  getEmployeeData() {
    this.subscription = this.employeesDataService.getEmployees()
      .subscribe((data: Employee[]) => {
        this.employees = data;
      });
  }

  pushNewEmployee(newEmployee) {
    this.subscription = this.employeesDataService.addEmployee(newEmployee)
      .subscribe((employee: Employee) => {
        this.employees.push(employee);
      });
  }

  getNewEmployeeFromDialog() {
    this.dialog.open(EmployeeAddFormComponent, {autoFocus: false})
      .afterClosed().subscribe((newEmployee) => {
      if (!newEmployee) {
        return;
      }
      this.pushNewEmployee(newEmployee);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
