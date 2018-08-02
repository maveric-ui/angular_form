import {Component, OnInit, Input, ChangeDetectionStrategy, AfterContentInit, AfterViewInit} from '@angular/core';
import {Employee} from '../../../classes/employee';
import {MatDialog, Sort} from '@angular/material';
import {EmployeeReactiveFormComponent} from '../employee-reactive-form/employee-reactive-form.component';
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
  public sortOrder: string = 'ASC';
  public sortField: string = 'position';
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
    this.dialog.open(EmployeeReactiveFormComponent, {autoFocus: false});
  }

  onSort(event) {

    this.employeeList.sort(this.compare(this.sortField));


    // if (!this.stateSort) {
    //   event.target.classList.remove('btn-arrow-down');
    //   event.target.classList.add('btn-arrow-up');
    //   this.stateSort = true;
    //   this.employeeList.sort(dynamicSort(event.target.name));
    //
    // } else {
    //   event.target.classList.remove('btn-arrow-up');
    //   event.target.classList.add('btn-arrow-down');
    //   this.stateSort = false;
    //   this.employeeList.sort(dynamicSort(event.target.name)).reverse();
    //
    // }
  }

  // public sortData(sort: Sort) {
  //   const data = this.employeeList.slice();
  //   if (!sort.active || sort.direction === '') {
  //     this.sortedData = data;
  //     return;
  //   }
  //
  //   this.employeeList = data.sort((a, b) => {
  //     const isAsc = sort.direction === 'asc';
  //     switch (sort.active) {
  //       case 'id': return compare(a.id, b.id, isAsc);
  //       case 'name': return compare(a.name, b.name, isAsc);
  //       case 'position': return compare(a.position, b.position, isAsc);
  //       case 'dateOfBirth': return compare(a.dateOfBirth, b.dateOfBirth, isAsc);
  //       case 'hireDate': return compare(a.hireDate, b.hireDate, isAsc);
  //       case 'address': return compare(a.address, b.address, isAsc);
  //       case 'city': return compare(a.city, b.city, isAsc);
  //       case 'country': return compare(a.country, b.country, isAsc);
  //       default: return 0;
  //     }
  //   });
  // }
}

function dynamicSort(property) {
  // let sortOrder = 1;
  // if (property[0] === '-') {
  //   sortOrder = -1;
  //   property = property.substr(1);
  // }
  return function (a, b) {
    const result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    return result;
  };
}
