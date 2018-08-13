import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from '../../../core';

@Component({
  selector: 'app-for-video',
  templateUrl: './for-video.component.html',
  styleUrls: ['./for-video.component.css']
})
export class ForVideoComponent implements OnInit {

  public state: Observable<string>;

  constructor(
    stateSrv: StateService,
  ) {
    this.state = stateSrv.state();
  }

  ngOnInit() {
  }

}
