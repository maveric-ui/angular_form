import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FilterService {
  private emitChangeData = new Subject<string>();
  emitChnages$ = this.emitChangeData.asObservable();

  emitChange(change: string) {
    this.emitChangeData.next(change);
  }
}
