import {
  GET_POSTS,
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  ADD_LIKE,
} from "../actions/post.action";

const initialState = {};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return action.payload;
    case ADD_POST:
      return [action.payload, ...state];
    case EDIT_POST:
      return state.map((post) => {
        if (post.id === action.payload.postId) {
          return {
            title: action.payload.title,
            author: action.payload.author,
            content: action.payload.content,
            likes: action.payload.likes,
            id: action.payload.postId,
          };
        } else return post;
      });
    case DELETE_POST:
      return state.filter((post) => post.id !== action.payload.postId);
    case ADD_LIKE:
      return state.map((post) => {
        if (post.id === action.payload.postId) {
          return {
            title: action.payload.title,
            author: action.payload.author,
            content: action.payload.content,
            likes: action.payload.likes,
            id: action.payload.postId,
          };
        } else return post;
      });
    default:
      return state;
  }
}
