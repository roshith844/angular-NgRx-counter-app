import { createReducer } from "@ngrx/store";
import { initialState } from "./posts.state";

const _postsReducer: Function = createReducer(initialState);

export function postsReducer(state: any, action: any): any{
     return _postsReducer(state, action)
}