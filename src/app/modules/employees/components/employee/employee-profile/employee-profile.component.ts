import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.less']
})

export class EmployeeProfileComponent implements OnInit {

  public dropdownState: boolean;
  public singState: boolean;

  constructor() { }

  ngOnInit() {
  }

  openCard() {
    this.dropdownState = !this.dropdownState;
  }

  @HostListener('document:click', ['$event']) closeCard(event) {
    if (event.target.closest('.status-user-singin')) {
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
    this.singState = !this.singState;
  }

}
