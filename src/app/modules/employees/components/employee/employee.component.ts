import { Component, OnInit, OnDestroy } from '@angular/core';
import { Employee } from '../../classes/employee';
import { EmployeesDataService } from '../../services/employees-data.service';
import { Subscription } from 'rxjs';
import { AuthMainService } from '../../../main/services/auth-main.service';
import { User } from '../../../main/classes/user';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.less']
})
export class EmployeeComponent implements OnInit, OnDestroy {

  public employees: Employee[];
  private subscribe: Subscription;

  constructor(private employeesDataService: EmployeesDataService) { }

  ngOnInit() {
    this.getEmployeeData();
  }

  private getEmployeeData() {
    this.subscribe = this.employeesDataService.getEmployees().subscribe((data: Employee[]) => {
      this.employees = data;
    });
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
}

}
