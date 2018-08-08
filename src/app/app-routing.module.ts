import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './modules/main/components/main/main.component';
import { NotFoundedComponent } from './modules/main/components/not-founded/not-founded.component';
import { EmployeeListMaterialComponent }
from './modules/employees/components/employee/employee-list-material/employee-list-material.component';
import { EmployeeEmailComponent } from './modules/employees/components/employee/employee-email/employee-email.component';

const mainRoutes = [
  {path: 'employee-list', component: EmployeeListMaterialComponent},
  {path: 'employee-email', component: EmployeeEmailComponent}
];

const appRoutes: Routes = [
  {path: 'main', component: MainComponent, children: mainRoutes},
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: '**', component: NotFoundedComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
