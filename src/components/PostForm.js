import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost, getPosts } from "../actions/post.action";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleForm = async (e) => {
    e.preventDefault();

    if (title && content) {
      const data = {
        title: title,
        content: content,
        author: "User.name",
        likes: 0,
      };

      await dispatch(addPost(data));
      setTitle("");
      setContent("");
      // dispatch(getPosts());
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={(e) => handleForm(e)}>
        <input
          type="text"
          placeholder="Titre du poste"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <textarea
          placeholder="Postez vos pensées..."
          onChange={(e) => setContent(e.target.value)}
          value={content}
        ></textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default PostForm;
