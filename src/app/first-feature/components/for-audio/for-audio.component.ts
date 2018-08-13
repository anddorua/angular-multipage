import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-for-audio',
  templateUrl: './for-audio.component.html',
  styleUrls: ['./for-audio.component.css']
})
export class ForAudioComponent implements OnInit {

  public state: Observable<string>;

  constructor(
    stateSrv: StateService,
  ) {
    this.state = stateSrv.state();
  }

  ngOnInit() {
  }

}
