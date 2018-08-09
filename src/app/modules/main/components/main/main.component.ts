import { Component, OnInit } from '@angular/core';
import { AuthMainService } from '../../services/auth-main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  constructor(private authMainService: AuthMainService) { }

  ngOnInit() {
  }

}
