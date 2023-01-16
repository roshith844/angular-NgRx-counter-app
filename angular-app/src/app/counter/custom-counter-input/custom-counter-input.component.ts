import { Component, OnInit } from '@angular/core';
import { changeChannelName, customIncrement } from '../state/counter.action';
import { CounterState } from '../state/counter.state';
import { Store } from '@ngrx/store'
import { getChannelName, getCounter } from '../state/counter.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit{
  value!: number;
  channelName$ !: Observable<string>;
  constructor(private store: Store<{ counter : CounterState}>){}
  onAdd(){
this.store.dispatch(customIncrement({count: Number(this.value)}))
  }
  onChangeChannelName(){
    this.store.dispatch(changeChannelName())
  }
  ngOnInit(): void{
    this.channelName$ = this.store.select(getChannelName)
}
  }

