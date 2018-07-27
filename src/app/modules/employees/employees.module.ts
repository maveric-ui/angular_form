import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatToolbarModule
} from '@angular/material';


import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeFormComponent } from './components/employee/employee-form/employee-form.component';
import { EmployeeSearchComponent } from './components/employee/employee-search/employee-search.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { EmployeeProfileComponent } from './components/employee/employee-profile/employee-profile.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule
  ],
  declarations: [
    EmployeeComponent,
    EmployeeFormComponent,
    EmployeeSearchComponent,
    EmployeeListComponent,
    EmployeeProfileComponent
  ],
  exports: [EmployeeComponent]
})
export class EmployeesModule { }
