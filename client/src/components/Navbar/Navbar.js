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
    <div>
       <nav class="navbar shadow navbar-expand-lg navbar-light bg-light sticky-top" style={{padding: ".5rem 0"}}>
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
                 <div style={{position: "fixed", right: "0px"}}>1</div>
         
               
            </div>
         
          </form>
          
          <div class="d-flex">
           <div class="d-flex align-items-center p-2"><a href="" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
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
    <div class="collapse position-fixed fixed-right" style={{width: "220px", right: "0px"}} id="collapseExample">
  <div class="card card-body" style={{margin: "0px"}}>
    <button class="btn btn-primary block w-100 border-0" data-bs-toggle="modal" data-bs-target="#exampleModal">SignUp</button>
    <button class="btn border-primary block w-100 mt-2">Login</button>
  </div>
</div>
    <div class="modal fade" id="exampleModal" style={{overflow: "hidden"}} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog mx-auto h-100 my-0 d-flex align-items-center" style={{"max-width": "800px"}}>
    <div class="modal-content">
      <div class="d-flex">
        <div class="bg-primary" style={{"flex-basis": "200px"}}>
          <div  style={{height: "500px", width: "100%"}} id="imgForm"></div>
        </div>        
         <div class="d-flex flex-column flex-grow-1 p-3">
         <div class="d-flex justify-content-between">
           <h3 class="flex-grow-1">Login</h3>
                   <button type="button" class="border-0" data-bs-dismiss="modal" aria-label="Close">
                     <i class="fas fa-times fa-2x"></i>
                   </button>
         </div>
         <div class="d-flex h-100">
           <div id="forms" class="d-flex flex-column justify-content-end mb-5">
              <div class="form-floating mb-3">
                <label for="floatingInput">Email address</label>
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
              
            </div>
            <div class="form-floating">
              <label for="floatingPassword">Password</label>
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
              
            </div>
            <a href="" class="btn btn-primary mt-2 rounded-pill block w-100 border-0">SignIn</a>
           </div>
         </div>
      </div>
      
      </div>
     
    </div>
  </div>
</div>
    </div>
   
  );
};

export default Navbar;
