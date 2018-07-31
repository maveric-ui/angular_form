import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-employee-reactive-form',
  templateUrl: './employee-reactive-form.component.html',
  styleUrls: ['./employee-reactive-form.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeeReactiveFormComponent implements OnInit {

  public countries: string[];

  constructor(private matDialogRef: MatDialogRef<EmployeeReactiveFormComponent> ) { }

  ngOnInit() {
    this.countries = ['Ukraine', 'United Kingdom', 'Japan', 'Germany', 'USA'];
  }

  close() {
    this.matDialogRef.close();
  }

}
