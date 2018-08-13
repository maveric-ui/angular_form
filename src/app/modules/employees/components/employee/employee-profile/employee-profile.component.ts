import { Component, OnInit, HostListener, DoCheck } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EmployeeSignInFormComponent } from '../employee-signin-form/employee-signin-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.less']
})

export class EmployeeProfileComponent implements OnInit, DoCheck {

  public dropdownState: boolean;
  public isSignIn: boolean;
  public nameLoggedUser: string
  public msgIdicatorState: boolean;

  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
  }

  ngDoCheck() {
    const userToken = sessionStorage.getItem('userToken');
    if (userToken) {
      this.isSignIn = true;
      this.msgIdicatorState = true;
      this.nameLoggedUser = userToken;
    }
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
    this.isSignIn = false;
    this.msgIdicatorState = false;
    sessionStorage.removeItem('userToken');
    this.router.navigateByUrl('main');
  }

  onSingIn() {
    this.dialog.open(EmployeeSignInFormComponent, {autoFocus: false});
  }

}
