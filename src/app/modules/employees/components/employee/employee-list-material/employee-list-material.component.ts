import { Component, Input, OnInit, ViewChild, ViewEncapsulation, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../../classes/employee';
import { MatDialog, MatSort, Sort } from '@angular/material';
import { EmployeeAddFormComponent } from '../employee-add-form/employee-add-form.component';

@Component({
  selector: 'app-employee-list-material',
  templateUrl: './employee-list-material.component.html',
  styleUrls: ['./employee-list-material.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeeListMaterialComponent implements OnInit, OnChanges  {

  @Input() public employeeList: Employee[];
  @Output() public sendNewEmployee: EventEmitter<Employee> = new EventEmitter<Employee>();
  @ViewChild(MatSort) sort: MatSort;
  public soursData;
  sortedData: Employee[];
  displayedColumns: string[] = ['id', 'name', 'position', 'dateOfBirth', 'hireDate', 'address', 'city', 'country'];

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['employeeList']) {
      this.soursData = this.employeeList;
    }
  }

  sortData(sort: Sort) {
    const data = this.soursData.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.soursData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id': return compare(a.id, b.id, isAsc);
        case 'name': return compare(a.name, b.name, isAsc);
        case 'position': return compare(a.position, b.position, isAsc);
        case 'dateOfBirth': return compare(a.dateOfBirth, b.dateOfBirth, isAsc);
        case 'hireDate': return compare(a.hireDate, b.hireDate, isAsc);
        case 'address': return compare(a.address, b.address, isAsc);
        case 'city': return compare(a.city, b.city, isAsc);
        case 'country': return compare(a.country, b.country, isAsc);
        default: return 0;
      }
    });
  }

  openNewEmployeeFrom() {
    const dialogRef = this.dialog.open(EmployeeAddFormComponent, {autoFocus: false});
    dialogRef.afterClosed().subscribe(result => {
      this.sendNewEmployee.emit(result);
    });
  }

}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
