import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { ShareService } from '../../../employees/services/share.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit, DoCheck, OnDestroy {

  public stateSpinner: boolean;
  private subscription: Subscription;

  constructor( private shareService: ShareService) { }

  ngOnInit() {
    this.stateSpinner = false;
  }

  ngDoCheck() {
    this.subscription = this.shareService.changeEmitted$.subscribe(data => {
      this.stateSpinner = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
