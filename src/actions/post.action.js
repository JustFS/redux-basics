import axios from "axios";

export const GET_POSTS = "GET_POSTS";
export const ADD_POST = "ADD_POST";

export const getPosts = () => {
  return (dispatch) => {
    return axios
      .get(`http://localhost:3000/posts?_sort=id&_order=desc`)
      .then((res) => {
        dispatch({ type: GET_POSTS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const addPost = (data) => {
  return (dispatch) => {
    return axios
      .post(`http://localhost:3000/posts`, data)
      .then(() => {
        dispatch({ type: ADD_POST, payload: data });
      })
      .catch((err) => console.log(err));
  };
};
