import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-employee-singin-form',
  templateUrl: './employee-singin-form.component.html',
  styleUrls: ['./employee-singin-form.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeeSinginFormComponent implements OnInit {

  constructor(private matDialogRef: MatDialogRef<EmployeeSinginFormComponent>) { }

  ngOnInit() {
  }


  close() {
    this.matDialogRef.close();
  }

}
