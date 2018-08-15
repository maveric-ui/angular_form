import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeComponent} from './components/employee/employee.component';
import {MailComponent} from '../mail/components/mail/mail.component';

const employeeRouters: Routes = [
  {path: 'employee', component: EmployeeComponent},
  {path: 'mail', component: MailComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(employeeRouters)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
