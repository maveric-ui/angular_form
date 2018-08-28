import {Component, OnInit, ViewEncapsulation, DoCheck, SimpleChanges} from '@angular/core';
import { FilterService } from '../../../../main/services/filter.service';


@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeeSearchComponent implements OnInit, DoCheck {

  public isSignIn: boolean;
  public searchWord: string;

  constructor(private filterService: FilterService) { }

  ngOnInit() {
    this.isSignIn = false;
  }

  onSearchChange(searchValue: string) {
    this.filterService.emitChange(searchValue);
  }

  ngDoCheck() {
    this.showHideSearch();
  }

  private showHideSearch() {
    const userToken = sessionStorage.getItem('userToken');
    if (userToken) {
      this.isSignIn = true;
    } else if (!userToken) {
      this.isSignIn = false;
    }
  }
}
