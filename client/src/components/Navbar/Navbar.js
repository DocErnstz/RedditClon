import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const logout = () => {
    dispatch({ type: "LOGOUT" });

    history.push("/auth");

    setUser(null);
  };
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <nav class="navbar shadow navbar-expand-lg navbar-light bg-light sticky-top" style={{width: "100vw"}, {padding: ".5rem 0"}}>
      <div class="container-fluid"> 
        <a class="navbar-brand m-0 p-2" href="#"
          ><i class="fab fa-reddit-alien fa-2x"></i></a>
        <div class="m-2 h3" id="brand">Reddit</div>
        
       
        <div class="d-flex flex-grow-1" id="navbarSupportedContent">
          <form class="d-flex flex-grow-1 border">
            <div class="input-group flex-nowrap">
              <span class="input-group-text bg-white border-0" id="addon-wrapping"
                ><i class="fas fa-search"></i></span>
              <input
                type="search"
                class="form-control border-0 h-100"
                placeholder="Search Reddit"
                aria-label="SearchReddit"
                aria-describedby="addon-wrapping"
            
              />
            </div>
          </form>
          <div class="d-flex">
           <div class="d-flex align-items-center p-2"><a href="">
             <i class="far fa-user fa-2x"></i>
             </a></div>
           <div class="d-flex flex-column">
             <div>Mercadoernesto</div>
             <div>Karma 999</div>
           </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
