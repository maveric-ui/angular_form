import { DataSource } from '@angular/cdk/collections';
import { MatSort } from '@angular/material';
import { Observable, merge, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee } from '../../../classes/employee';

export class DataTableDataSource extends DataSource<Employee> {
  dataStream = new BehaviorSubject<Employee[]>(this.employeeList);

  set data (employees: Employee[]) { this.dataStream.next(employees); }
  get data(): Employee[] { return this.dataStream.value; }

  constructor(private sort: MatSort, private employeeList) {
    super();
  }

  connect(): Observable<Employee[]> {
    const dataMutations = [
      this.dataStream,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getSortedData(this.data);
    }));
  }

  disconnect() {}

  private getSortedData(data: Employee[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'desc';
      switch (this.sort.active) {
        case 'id': return compare(+a.id, +b.id, isAsc);
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
}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
