import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { EmployeeListMaterialComponent } from '../employees/components/employee/employee-list-material/employee-list-material.component';
import { NotFoundedComponent } from './components/not-founded/not-founded.component';


const mainRoutes: Routes = [
  {path: '', component: MainComponent, pathMatch: 'full'},
  {path: 'employee-list', component: EmployeeListMaterialComponent},
  {path: '**', component: NotFoundedComponent}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(mainRoutes)
  ],
  declarations: []
})
export class MainRoutingModule { }
