import {Component, OnInit, Input, ChangeDetectionStrategy, AfterContentInit, AfterViewInit} from '@angular/core';
import {Employee} from '../../../classes/employee';
import {MatDialog, Sort} from '@angular/material';
import {EmployeeAddFormComponent} from '../employee-add-form/employee-add-form.component';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent implements OnInit, AfterViewInit {

  @Input() public employeeList: Employee[];
  private stateSort: boolean;
  public sortOrder = 'ASC';
  public sortField = 'position';
  public sortedData: Employee[];

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
    this.stateSort = false;
  }

  ngAfterViewInit() {

  }

  compare(sortField) {

    return function (a, b) {
      if (a[sortField] < b[sortField]) {
        return -1;
      }
      if (a[sortField] > b[sortField]) {
        return 1;
      }
      return 0;
    };
  }

  public openNewEmployeeFrom() {
    this.dialog.open(EmployeeAddFormComponent, {autoFocus: false});
  }


  onSort(event) {
    if (!this.stateSort) {
      event.target.classList.remove('btn-arrow-down');
      event.target.classList.add('btn-arrow-up');
      this.stateSort = true;
      this.employeeList.sort(this.dynamicSort(event.target.name));
    } else {
      event.target.classList.remove('btn-arrow-up');
      event.target.classList.add('btn-arrow-down');
      this.stateSort = false;
      this.employeeList.sort(this.dynamicSort(event.target.name)).reverse();

    }
  }

  dynamicSort(property) {
    return function (a, b) {
      const result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result;
    };
  }
}

