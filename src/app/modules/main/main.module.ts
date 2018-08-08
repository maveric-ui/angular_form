import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatSelectModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';
import { MainComponent } from './components/main/main.component';
import { MainHeaderComponent } from './components/main/main-header/main-header.component';
import { MainSidebarComponent } from './components/main/main-sidebar/main-sidebar.component';
import { MainRoutingModule } from './main-routing.module';
import { EmployeeSearchComponent } from '../employees/components/employee/employee-search/employee-search.component';
import { EmployeeProfileComponent } from '../employees/components/employee/employee-profile/employee-profile.component';
import { EmployeesModule } from '../employees/employees.module';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MainRoutingModule,
    EmployeesModule
  ],
  exports: [
    MainComponent,
  ],
  declarations: [
    MainComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    EmployeeSearchComponent,
    EmployeeProfileComponent
  ]
})
export class MainModule { }
