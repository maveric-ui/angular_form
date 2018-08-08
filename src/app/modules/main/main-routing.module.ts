import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListMaterialComponent } from '../employees/components/employee/employee-list-material/employee-list-material.component';

const mainRoutes: Routes = [
  {path: 'employee-list', component: EmployeeListMaterialComponent},
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
