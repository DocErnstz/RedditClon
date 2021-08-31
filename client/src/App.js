import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getPosts } from './actions/posts';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/SubHome/Home";
import Homebar from "./components/RealHome/Home";
import Auth from "./components/Auth/Auth";
import 'bootstrap/dist/css/bootstrap.min.css';
import CommentBoard from "./components/Posts/CommentBoard/board";
import "./index.css";
const App = () => {
    const dispatch = useDispatch();
    const [currentId] = useState(0);
    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);
    return (
        <BrowserRouter>
    
        <Navbar/>
        <Switch>
                <Route path="/auth" exact component={Auth}/>
                <Route path="/board/:id" exact component={CommentBoard}/>
                <Route path="/r/:title/:id" exact component={Home}/>
                <Route path="/" exact component={Homebar}/>
            </Switch>
           
        </BrowserRouter>
        
    );    
}

export default App;