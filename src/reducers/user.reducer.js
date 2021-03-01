import { ADD_USER_LIKE } from "../actions/post.action";
import { GET_USER } from "../actions/user.actions";

const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    // case ADD_USER_LIKE:
    //   return state.map((user) => {
    //     if (user.id === action.payload.postId) {
    //       return {
    //         title: action.payload.title,
    //         author: action.payload.author,
    //         content: action.payload.content,
    //         likes: action.payload.likes,
    //         id: action.payload.postId,
    //       };
    //     } else return post;
    default:
      return state;
  }
}
