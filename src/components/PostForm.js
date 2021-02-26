import React, { useState } from "react";

const PostForm = () => {
  return (
    <div className="form-container">
      <form action="">
        <textarea placeholder="Postez vos pensées..."></textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default PostForm;
