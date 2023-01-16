import { CounterState } from "./counter.state";
import { createFeatureSelector,createSelector } from '@ngrx/store'

const getCounterState = createFeatureSelector<CounterState>('counter') // argument name is from app module 
export const getCounter = createSelector(getCounterState,(state: any)=>{
     return state.counter;
})

export const getChannelName = createSelector(getCounterState, (state)=>{
     return state.channelName;
}
)