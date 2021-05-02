import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import memories from "./images/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { getPosts } from './actions/posts';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Searchbar from "./components/Search/search";
import Auth from "./components/Auth/Auth";
import 'bootstrap/dist/css/bootstrap.min.css';
import CommentBoard from "./components/Posts/CommentBoard/board"
const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(0);
    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);
    return (
        <BrowserRouter>
        <Container maxidth="lg">
            <Navbar/>
            <Switch>
                <Route path="/auth" exact component={Auth}/>
                <Route path="/board/:id" exact component={CommentBoard}/>
                <Route path="/r/:title/:id" exact component={Home}/>
                <Route path="/" exact component={Searchbar}/>
            </Switch>
            
        </Container>
        </BrowserRouter>
        
    );    
}

export default App;