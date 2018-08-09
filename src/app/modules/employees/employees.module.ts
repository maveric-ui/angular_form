import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { EmployeeAddFormComponent } from './components/employee/employee-add-form/employee-add-form.component';
import { EmployeeSignInFormComponent } from './components/employee/employee-signin-form/employee-signin-form.component';
import { EmployeeListMaterialComponent } from './components/employee/employee-list-material/employee-list-material.component';
import { NotFoundedComponent } from '../main/components/not-founded/not-founded.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
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
  ],
  declarations: [
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeAddFormComponent,
    EmployeeSignInFormComponent,
    EmployeeListMaterialComponent,
    NotFoundedComponent
  ],
  exports: [EmployeeComponent],
  entryComponents: [
    EmployeeAddFormComponent,
    EmployeeSignInFormComponent
  ]
})
export class EmployeesModule { }
