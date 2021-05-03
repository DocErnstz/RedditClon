import React, { useState, useEffect } from "react";
import search from "./search.css";
import { getSubs } from '../../actions/subs';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";



const Searchbar = () => {
    
    const [key, setKey] = useState("");
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSubs());
    });
    const subs  = useSelector(state => state.subs);
    const filter_subs = subs.filter(sub => sub.title.includes(key));
    const prefix = "r/";
    const space = "/";
    console.log(subs);
    return (
        <div className="container">
            <div class="row align-items-center">
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
            {filter_subs.map((sub) => (<div class="card">
                                        <div class="row">
                                            <div className="col">
                                                <div className="card-body">
                                                    <div className="card-title">
                                                       <a href={prefix + sub.title + space + sub._id}>{sub.title}</a>
                                                    </div>
                                                </div>
                                            </div>
                                            </div></div>))}
        </div>
    )
}

export default Searchbar;