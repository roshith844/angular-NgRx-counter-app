import { Component } from '@angular/core';
import { customIncrement } from '../state/counter.action';
import { CounterState } from '../state/counter.state';
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent{
  value!: number;
  constructor(private store: Store<{ counter : CounterState}>){}
  onAdd(){
this.store.dispatch(customIncrement({count: Number(this.value)}))
  }
}
