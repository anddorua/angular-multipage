import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private _state = new BehaviorSubject<string>('one');
  constructor() { }

  public state() {
    return this._state.asObservable();
  }

  public switch() {
    this._state.next(this._state.value === 'one' ? 'two' : 'one');
  }
}
