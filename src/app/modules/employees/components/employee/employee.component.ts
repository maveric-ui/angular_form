import { Component, OnInit, OnDestroy } from '@angular/core';
import { Employee } from '../../classes/employee';
import { EmployeesDataService } from '../../services/employees-data.service';
import { Subscription } from 'rxjs';
import { FilterService } from '../../../main/services/filter.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.less']
})

export class EmployeeComponent implements OnInit, OnDestroy {

  public employees: Employee[];
  private subscription: Subscription;
  public isSignIn: boolean;
  private searchWord: string;

  constructor(private employeesDataService: EmployeesDataService, private filterService: FilterService) { }


  ngOnInit() {
    this.getEmployeeData();
    this.isSignIn = false;
    this.getSearchValue();
  }

  getSearchValue() {
    this.subscription = this.filterService.emitChnages$.subscribe( (searchValue) => {
      debugger
      this.searchWord = searchValue;
    });
  }

  getEmployeeData() {
    this.subscription = this.employeesDataService.getEmployees(this.searchWord)
      .subscribe((data: Employee[]) => { this.employees = data; });
  }

  pushEmployee(newEmployee: Employee) {
    this.employeesDataService.addEmployee(newEmployee)
      .subscribe(employee => { this.employees.push(employee); });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
}

}
