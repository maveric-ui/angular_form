import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { User } from '../classes/user';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthMainService {

  private urlAcc = environment.urlAcc;

  constructor(private http: HttpClient) {
  }

  signIn(name: string, password: string): Observable<User> {
    const urlGetUser = `${this.urlAcc}/accounts?name=${name}`;
    return this.http.get<User>(urlGetUser)
      .pipe(
        tap(
          user => {
            if (user.name === name && user.password === password) {
              return user;
            }
          }
        )
      );
  }
}
