import React from 'react';

const Post = ({ post }) => {
  let number = Math.floor(Math.random() * 200);
  let link = 'https://picsum.photos/1500/' + number + '?random'

  return (
    <div className="post">
      <h2>{post.title}</h2>
      <img src={link} alt="img-post"/>
      <p>{post.content}</p>
      <span>{post.author}</span>
    </div>
  );
};

export default Post;