import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLike } from "../actions/post.action";

const Like = ({ post }) => {
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleLike = () => {
    // console.log(user);
    // console.log(post);

    const data = {
      title: post.title,
      author: post.author,
      content: post.content,
      likes: ++post.likes,
    };

    console.log(data);

    dispatch(addLike(post.id, data));
  };

  return (
    <div onClick={handleLike}>
      <img src="./icons/clap.png" className="clap" alt="clap" />
      <span>{post.likes}</span>
    </div>
  );
};

export default Like;
