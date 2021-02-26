import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "./components/Post";
import PostForm from "./components/PostForm";
import User from "./components/User";

const App = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => setPosts(res.data));
  }, []);

  return (
    <div>
      <h1>Extreme</h1>
      <PostForm />
      <div className="content">
        <div className="post-container">
          {posts && posts.map((post) => <Post post={post} key={post.id} />)}
        </div>
        <User />
      </div>
    </div>
  );
};

export default App;
