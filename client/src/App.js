import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getPosts } from './actions/posts';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/SubHome/Home";
import Homebar from "./components/RealHome/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import CommentBoard from "./components/Posts/CommentBoard/board";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    const dispatch = useDispatch();
    const [currentId] = useState(0);
    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);
    return (
        <BrowserRouter>
        <ToastContainer />
        <Navbar/>
        <Switch>
                <Route path="/board/:id" exact component={CommentBoard}/>
                <Route path="/r/:title/:id" exact component={Home}/>
                <Route path="/" exact component={Homebar}/>
            </Switch>
        </BrowserRouter>
        
    );    
}

export default App;