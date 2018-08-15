import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { User } from '../classes/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthMainService {

  private url = environment.url;

  constructor(private http: HttpClient) {}

  signIn(name: string): Observable<User[]> {
    const urlUser = `${this.url}/accounts?name=${name}`;
    return this.http.get<User[]>(urlUser);
  }

}
