import React from "react";

const Post = ({ post }) => {
  let number = Math.floor(Math.random() * 200);
  let link = "https://picsum.photos/1500/" + number + "?random";

  return (
    <div className="post">
      <div className="edit-delete">
        <img src="./icons/edit.svg" alt="edit" />
        <img src="./icons/delete.svg" alt="delete" />
      </div>
      <h2>{post.title}</h2>
      <img src={link} class="post-img" alt="img-post" />
      <p>{post.content}</p>
      <div className="author">
        <h4>{post.author}</h4>
        <img src="./icons/clap.png" class="clap" alt="clap" />
      </div>
    </div>
  );
};

export default Post;
