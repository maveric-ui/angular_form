import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Employee } from '../classes/employee';

@Injectable({
  providedIn: 'root'
})

export class ShareService {
  private emitChangeSource = new Subject<boolean>();
  changeEmitted$ = this.emitChangeSource.asObservable();

  emitChange(change: boolean) {
    this.emitChangeSource.next(change);
  }
}
