import axios from "axios";

export const GET_POSTS = "GET_POSTS";
export const ADD_POST = "ADD_POST";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";
export const ADD_LIKE = "ADD_LIKE";
export const ADD_USER_LIKE = "ADD_USER_LIKE";

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

export const editPost = (postId, data) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `http://localhost:3000/posts/${postId}`,
      data: { ...data },
    })
      .then((res) => {
        dispatch({ type: EDIT_POST, payload: { ...data, postId } });
      })
      .catch((err) => console.log(err));
  };
};

export const deletePost = (postId) => {
  return (dispatch) => {
    return axios({
      method: "delete",
      url: `http://localhost:3000/posts/${postId}`,
    })
      .then((res) => {
        dispatch({ type: DELETE_POST, payload: { postId } });
      })
      .catch((err) => console.log(err));
  };
};

export const addLike = (postId, data) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `http://localhost:3000/posts/${postId}`,
      data: { ...data },
    })
      .then((res) => {
        dispatch({ type: ADD_LIKE, payload: { ...data, postId } });
        dispatch({ type: ADD_USER_LIKE });
      })
      .catch((err) => console.log(err));
  };
};
