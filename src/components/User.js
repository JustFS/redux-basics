import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "./Utils";

const User = () => {
  const user = useSelector((state) => state.userReducer);
  const postReducer = useSelector((state) => state.postReducer);
  const [userPost, setUserPost] = useState([""]);

  return (
    <div className="user-container">
      <div className="user">
        <h3>{!isEmpty(user[0]) && user[0].pseudo}</h3>
        <img src="https://thispersondoesnotexist.com/image" alt="" />
        <p>Age : {Math.floor(Math.random() * 60 + 10)} ans</p>
        <p>Like(s) : 0</p>
      </div>
    </div>
  );
};

export default User;
