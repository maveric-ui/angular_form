import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
  MatTableModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { MainComponent } from './components/main/main.component';
import { MainHeaderComponent } from './components/main/main-header/main-header.component';
import { MainSidebarComponent } from './components/main/main-sidebar/main-sidebar.component';
import { MainRoutingModule } from './main-routing.module';
import { EmployeeSearchComponent } from '../employees/components/employee/employee-search/employee-search.component';
import { EmployeeProfileComponent } from '../employees/components/employee/employee-profile/employee-profile.component';
import { EmployeesModule } from '../employees/employees.module';
import {AuthGuard} from './services/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
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
    MatProgressSpinnerModule,
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
  ],
  providers: [AuthGuard]
})
export class MainModule { }
