import { Post } from './../../models/post.model'
export interface  PostsState {
     posts: Post[]; 
}

export const initialState = {
     posts: [
          {id: '1', title: "just a title", description: "sample description"},
          {id: '2', title: "Another title", description: "sample description"}
     ]
}