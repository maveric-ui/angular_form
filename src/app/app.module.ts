import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EmployeesModule } from './modules/employees/employees.module';
import { MainModule } from './modules/main/main.module';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    EmployeesModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
