import {Component, OnInit, ElementRef, HostListener} from '@angular/core';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.less']
})
export class EmployeeProfileComponent implements OnInit {

  public dropdownState: boolean;

  constructor(private el: ElementRef) { }

  ngOnInit() {
  }

  @HostListener('document:click', ['$event']) onDropDown(event) {
    // workable

    // if (event.target.closest('.dropdown')) {
    //   console.log('inside');
    //   this.dropdownState = true;
    // } else {
    //   this.dropdownState = false;
    // }
  }
}
