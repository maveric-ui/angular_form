import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListMaterialComponent } from '../employees/components/employee/employee-list-material/employee-list-material.component';
import { NotFoundedComponent } from './components/not-founded/not-founded.component';

const childRoutes: Routes = [
  {path: 'employee-list', component: EmployeeListMaterialComponent},
];

const mainRoutes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', children: childRoutes},
  {path: '**', component: NotFoundedComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(mainRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class MainRoutingModule { }
