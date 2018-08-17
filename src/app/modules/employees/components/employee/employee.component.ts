import { Component, OnInit, OnDestroy } from '@angular/core';
import { Employee } from '../../classes/employee';
import { EmployeesDataService } from '../../services/employees-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.less']
})

export class EmployeeComponent implements OnInit, OnDestroy {

  public employees: Employee[];
  private subscription: Subscription;
  public isSignIn: boolean;

  constructor(private employeesDataService: EmployeesDataService) { }

  ngOnInit() {
    this.getEmployeeData();
    this.isSignIn = false;
  }

  private getEmployeeData() {
    this.subscription = this.employeesDataService.getEmployees()
      .subscribe((data: Employee[]) => { this.employees = data; });
  }

  pushEmployee(newEmployee: Employee) {
    this.subscription = this.employeesDataService.addEmployee(newEmployee)
      .subscribe(employee => { this.employees.push(employee); });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
}

}
