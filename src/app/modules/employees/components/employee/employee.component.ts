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
  private subscribe: Subscription;

  constructor(private employeesDataService: EmployeesDataService) { }

  ngOnInit() {
    this.getEmployeeData();
  }

  getEmployeeData() {
    this.subscribe = this.employeesDataService.getEmployess().subscribe((data: Employee[]) => {
      this.employees = data;
    });
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
}

}
