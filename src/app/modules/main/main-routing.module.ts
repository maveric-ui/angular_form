import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { EmployeeComponent } from '../employees/components/employee/employee.component';
import { MailComponent } from '../mail/components/mail/mail.component';
import { AuthGuard } from './services/auth.guard';

const childRouters: Routes = [
  {path: 'employee', component: EmployeeComponent},
  {path: 'mail', component: MailComponent}
];

const mainRoutes: Routes = [
  {path: 'main', component: MainComponent, canActivate: [AuthGuard], children: childRouters },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class MainRoutingModule { }
