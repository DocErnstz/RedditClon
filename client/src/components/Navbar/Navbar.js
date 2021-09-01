import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GoogleLogin } from 'react-google-login';
import { signin, signup } from '../../actions/auth';


const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };


const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState(initialState);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const [isSignin, setIsSignin] = useState(true);
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
    
  }, [location])
  const onClick = (e) => {
    e.preventDefault();
    document.getElementById("Title").innerHTML = e.target.innerHTML;
   
    if(e.target.innerHTML == "Login"){
      setIsSignin(true);
    } else {
      setIsSignin(false);
    }
  }
 
  
  return (
    <div>
       <div id="NavbarContainer" className="sticky-top">
       <nav className="navbar shadow navbar-expand-lg navbar-light bg-light" style={{padding: ".5rem 0"}}>
      <div className="container-fluid"> 
        <a className="navbar-brand m-0 p-2" href="#"
          ><i className="fab fa-reddit-alien fa-2x"></i></a>
        <div className="m-2 h3" id="brand">Reddit</div>
        
       
        <div className="d-flex flex-grow-1" id="navbarSupportedContent">
          <form className="d-flex flex-grow-1 border">
            <div className="input-group flex-nowrap">
              <span className="input-group-text bg-white border-0" id="addon-wrapping"
                ><i className="fas fa-search"></i></span>
              <input
                type="search"
                className="form-control border-0 h-100"
                placeholder="Search Reddit"
                aria-label="SearchReddit"
                aria-describedby="addon-wrapping"
            
              />
                 <div style={{position: "fixed", right: "0px"}}>1</div>
         
               
            </div>
         
          </form>
          
          <div className="d-flex">
           <div className="d-flex align-items-center p-2"><a href="" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
             <i className="far fa-user fa-2x"></i>
             </a></div>
           <div className="d-flex flex-column">
             <div>Mercadoernesto</div>
             <div>Karma 999</div>
           </div>
          </div>
        </div>
      </div>
      <div className="collapse position-fixed" style={{width: "220px", marginTop: "140px", marginLeft: "84%"}} id="collapseExample">
  <div className="card card-body">
    <button className="btn block border-0 w-100 btn-primary" id="signup" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={onClick}>SignUp</button>
    <button className="btn block border-0 w-100 border-primary mt-2"  id="signin" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={onClick}>Login</button>
  </div>
</div>
      
    </nav>
  </div>
  <div className="modal fade" id="exampleModal" style={{overflow: "hidden"}} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog mx-auto h-100 my-0 d-flex align-items-center" style={{maxWidth: "800px"}}>
    <div className="modal-content">
      <div className="d-flex">
        <div className="bg-primary" style={{flexBasis: "200px"}}>
          <div style={{height: "500px", width: "100%"}} id="imgForm"></div>
        </div>        
         <div className="d-flex flex-column flex-grow-1 p-3">
         <div className="d-flex justify-content-between">
           <h3 className="flex-grow-1" id="Title">Login</h3>
                   <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <div className="d-flex h-100">
           <div id="forms" className="d-flex flex-column justify-content-end mb-5">
             {isSignin ? (
             <><div className="form-floating mb-3">
                <label htmlFor="floatingInput">Email address</label>
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
              
            </div>
            <div className="form-floating">
              <label htmlFor="floatingPassword">Password</label>
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
              
            </div>
            <a href="" className="btn block w-100 border-0 btn-primary mt-2 rounded-pill">SignIn</a> </>) : ( <><div className="form-floating mb-3">
                <label htmlFor="floatingInput">Email address</label>
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
              
            </div>
            <div className="form-floating mb-3">
              <label htmlFor="floatingPassword">Username</label>
              <input type="name" className="form-control" id="floatingUsername" placeholder="Password"/>
              
            </div>
            <div className="form-floating mb-3">
              <label htmlFor="floatingPassword">Password</label>
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
              
            </div>
            <div className="form-floating">
              <label htmlFor="floatingPassword">PasswordCheck</label>
              <input type="password" className="form-control" id="floatingPasswordCheck" placeholder="PasswordCheck"/>
              
            </div>
            <a href="" className="btn block w-100 border-0 btn-primary mt-2 rounded-pill">SignUp</a> </>)}
              
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
