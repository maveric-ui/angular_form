import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Employee } from '../classes/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesDataService {

  private url = environment.url;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    const urlEmployee = `${this.url}/profiles/`;
    return this.http.get<Employee[]>(urlEmployee);
  }


}
