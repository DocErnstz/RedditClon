import React, { useState, useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import useStyles from "../../styles";
import { useDispatch } from "react-redux";
import { getPosts } from '../../actions/posts';
import style from "./Home.css";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";

const Home = () => { 
    const classes = useStyles();
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(0);
    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);
    return (
        <div class="container">
            <div className="row">
                <div className="col">
                <Posts setCurrentId={setCurrentId}/>
                </div>
                <div className="col">
                <Form currentId={currentId} setCurrentId={setCurrentId}/>
                </div>
            </div>
        </div>
               
                   
               
          
    )
}

export default Home;