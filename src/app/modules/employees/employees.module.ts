import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeFormComponent } from './components/employee/employee-form/employee-form.component';
import { EmployeeSearchComponent } from './components/employee/employee-search/employee-search.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EmployeeComponent,
    EmployeeFormComponent,
    EmployeeSearchComponent,
    EmployeeListComponent
  ],
  exports: [EmployeeComponent]
})
export class EmployeesModule { }
