import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation} from "react-router-dom";
import { AppBar, Typography, Toolbar, Button, Avatar } from "@material-ui/core";
import { useDispatch } from 'react-redux';

import style from "./styles.css";
import memories from "../../images/memories.png";

const Navbar = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const logout = () => {
        dispatch({ type: "LOGOUT" });
    
        history.push('/auth');
    
        setUser(null);
      };
      useEffect(() => {
        const token = user?.token;
    
        setUser(JSON.parse(localStorage.getItem('profile')));
      }, [location]);

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Reddin</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Settings
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/auth">Sign Up</a></li>
            <li><a class="dropdown-item" href="/auth">Sign In</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
        
        
    );
}

export default Navbar;