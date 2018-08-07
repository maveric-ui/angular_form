import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-employee-reactive-form',
  templateUrl: './employee-add-form.component.html',
  styleUrls: ['./employee-add-form.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeeAddFormComponent implements OnInit {

  public countries: string[];
  public cities: string[];

  constructor(private matDialogRef: MatDialogRef<EmployeeAddFormComponent> ) { }

  ngOnInit() {
    this.countries = ['Ukraine', 'United Kingdom', 'Japan', 'Germany', 'USA'];
    this.cities = ['Dnipro', 'London', 'Tokio', 'Berlin', 'New York'];
  }

  close() {
    this.matDialogRef.close();
  }

}
