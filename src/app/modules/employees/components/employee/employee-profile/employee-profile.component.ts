import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EmployeeSignInFormComponent } from '../employee-signin-form/employee-signin-form.component';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.less']
})

export class EmployeeProfileComponent implements OnInit {

  public dropdownState: boolean;
  public singState: boolean;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openCard() {
    this.dropdownState = !this.dropdownState;
  }

  @HostListener('document:click', ['$event']) closeCard(event) {
    if (event.target.closest('.status-user-singout')) {
      return;
    } else if (event.target.closest('.dropdown-card')) {
      return;
    }
    this.dropdownState = false;
  }

  onSingOut() {
    this.dropdownState = false;
    this.singState = !this.singState;
  }

  onSingIn() {
    this.dialog.open(EmployeeSignInFormComponent, {autoFocus: false});
  }

}
