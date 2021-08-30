import React, { useState, useEffect } from "react";
import { getSubs } from "../../actions/subs";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import SubCard from "./SubCard.js";
import { v4 as uuidv4 } from 'uuid';

const Searchbar = () => {
  const [key, setKey] = useState("");

  const dispatch = useDispatch();
   useEffect(() => {
    dispatch(getSubs());
  });
  const subs = useSelector((state) => state.subs);
  const filter_subs = subs.filter((sub) => sub.title.includes(key));
  const prefix = "r/";
  const space = "/";
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            onChange={(e) => setKey(e.target.value)}
            autoFocus
          />
        </div>
      </div>
      {filter_subs.map((sub) => (
        <SubCard sub={sub} key={uuidv4()} />
      ))}
    </div>
  );
};

export default Searchbar;
