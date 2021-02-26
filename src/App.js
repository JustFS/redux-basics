import axios from "axios";
import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then((res) => console.log(res.data));
  }, []);

  return <div>Hello React</div>;
};

export default App;
