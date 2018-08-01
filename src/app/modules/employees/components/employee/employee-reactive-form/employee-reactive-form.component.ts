import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-employee-reactive-form',
  templateUrl: './employee-reactive-form.component.html',
  styleUrls: ['./employee-reactive-form.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeeReactiveFormComponent implements OnInit {

  public countries: string[];
  public cities: string[];

  constructor(private matDialogRef: MatDialogRef<EmployeeReactiveFormComponent> ) { }

  ngOnInit() {
    this.countries = ['Ukraine', 'United Kingdom', 'Japan', 'Germany', 'USA'];
    this.cities = ['Dnipro', 'London', 'Tokio', 'Berlin', 'New York'];
  }

  close() {
    this.matDialogRef.close();
  }

}
