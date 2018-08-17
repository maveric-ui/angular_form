import { Component, OnInit, DoCheck, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ShareService } from '../../../employees/services/share.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit, DoCheck, OnDestroy {

  public stateSpinner: boolean;
  public blur: string;
  private subscription: Subscription;

  constructor( private shareService: ShareService) { }

  ngOnInit() {
    this.stateSpinner = false;
  }

  ngDoCheck() {
    this.subscription = this.shareService.changeEmitted$.subscribe(data => {
      this.stateSpinner = data;

      if (this.stateSpinner) {
        this.blur = 'blur';
      } else {
        this.blur = '';
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
