import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public state: Observable<string>;

  constructor(
    stateServ: StateService,
  ){
    this.state = stateServ.state();
  }
}
