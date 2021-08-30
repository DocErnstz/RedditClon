import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";

import Posts from "../Posts/Posts";
import Form from "../Form/Form";

const Home = () => {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(0);
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <div class="container">
      <div className="row">
        <div className="col-12 col2">
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </div>
        <div className="col-12 col1">
          <Posts setCurrentId={setCurrentId} />
        </div>
      </div>
    </div>
  );
};

export default Home;
