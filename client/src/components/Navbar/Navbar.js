import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GoogleLogin } from 'react-google-login';
import { signin, signup } from '../../actions/auth';
import { getSubs } from '../../actions/subs';
import { CircularProgress } from "@material-ui/core";
import { v4 as uuidv4 } from 'uuid';


const initialState = { userName: '', email: '', password: '', passwordCheck: '' };


const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [form, setForm] = useState(initialState);
  const [isSignin, setIsSignin] = useState(true);
  const [isSearch, setIsSearch] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    window.location.reload();
    setUser(null);
  };
 
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
    dispatch(getSubs());
  }, [location])
  const subs = useSelector((state) => state.subs);

  const onClick = (e) => {
    e.preventDefault();
    document.getElementById("Title").innerHTML = e.target.innerHTML;
    
    if(e.target.innerHTML == "Login"){
      setIsSignin(true);
    } else {
      setIsSignin(false);
    }
  }
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
   const onSubmit = (e) => {
      e.preventDefault();
      console.log("a");
      if (isSignin) {
         dispatch(signin(form, history));
  
      } else {
        const newForm = {email: form.email, userName: form.userName, password: form.password};
        dispatch(signup(newForm, history));
      }
    };
   
  const switchMode = (e) => {
      e.preventDefault();
      setIsSignin((prevIsSignin) => !prevIsSignin);
      if(!isSignin){
        document.getElementById("Title").innerHTML = "Login";
      } else {
        document.getElementById("Title").innerHTML = "SignUp";
      }
    };
  const onInput = (e) => {
    e.preventDefault();
    setIsSearch(!isSearch);
    if(!isSearch){
      document.getElementById("searchResults").style.height= '200px';
    } else {
       document.getElementById("searchResults").style.height= '0px';
    }
    
  }
  
  return (
    <>
       <div id="NavbarContainer" style={{position: "sticky", top: "0px", zIndex: "999"}} >
       <nav className="navbar shadow navbar-expand-lg navbar-light bg-light" style={{padding: ".5rem 0"}}>
      <div className="container-fluid"> 
        <a className="navbar-brand m-0 p-2" href="#"
          ><i className="fab fa-reddit-alien fa-2x"></i></a>
        <div className="m-2 h3" id="brand"><a href="http://localhost:3000/" class="text-dark" style={{textDecoration: "none"}}>Reddit</a></div>
        
       
        <div className="d-flex w-100"  id="navbarSupportedContent">
          <form className="d-flex flex-grow-1 border">
            <div className="input-group flex-nowrap">
              <span className="input-group-text bg-white border-0" id="addon-wrapping"
                ><i className="fas fa-search"></i></span>
                <div className="d-flex flex-column flex-grow-1">
                  <input
                type="search"
                className="form-control border-0 h-100"
                placeholder="Search Reddit"
                aria-label="SearchReddit"
                aria-describedby="addon-wrapping"
                onClick={onInput}
              />
              <ul class="w-100 p-0 d-flex flex-column" id="searchResults" style={{marginBottom:"-100%",  overflowY: "auto"}}>
                {
                 (subs.length && isSearch) ?  (<div>{subs.map(sub => <li style={{listStyleType: "none"}} class="bg-white d-flex w-100 py-3 text-black" key={uuidv4()}>
                  <div class="d-inline-flex align-items-center">
                    <div className="sub m-2"></div>
                   <div className="d-flex flex-column">
                     <div><a href={"http://localhost:3000/r/" + sub.title + "/" + sub._id} style={{textDecoration: "none"}}>{sub.title}</a></div>
                   </div>
                  </div>
                   
                </li>)}</div>) : ""
                }
              
              </ul>
                </div>
              
                
            </div>
         
          </form>
          
          <div className="d-flex">
           <div className="d-flex align-items-center p-2">
             <div className="d-flex align-items-center p-2"><a href="" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
             <i className="far fa-user fa-2x"></i>
             </a></div>
             {user ? (<div className="d-flex flex-column">
             <div>{user.result.name}</div>
             <div>Karma 999</div>
           </div>) : (<div></div>)}
 
             </div>
            
          </div>
        </div>
      </div>
      <div className="collapse position-fixed" style={{width: "220px", right: "0px", top: "80px"}} id="collapseExample">
  <div className="card card-body mt-0">
    <button className="btn block border-0 w-100 btn-primary" id="signup" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={onClick}>SignUp</button>
    <button className="btn block border-0 w-100 border-primary mt-2"  id="signin" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={onClick}>Login</button>
    {user ? <button className="btn block border-0 w-100 border-primary btn-primary mt-2"  id="logout" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={logout}>Logout</button> : ""}
    
  </div>
</div>
      
    </nav>
  </div>
  <div className="modal fade" id="exampleModal" style={{overflow: "hidden"}}   tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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

             {isSignin ? (
               
             <form id="forms" className="d-flex flex-column justify-content-end" onSubmit={onSubmit}>
               <div className="mb-3">
                 <label htmlFor="floatingInput" id="email">email</label>
                 <input type="text" name="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={handleChange} required/>
                </div>
              <div>
                <label htmlFor="floatingPassword" id="password">password</label>
                <input type="password" name="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={handleChange} required />
              </div>
              <input type="submit" className="btn block w-100 border-0 btn-primary mt-2 rounded-pill" value="SignIn" /> 
              <div className="d-inline-flex justify-content-end">
                 <a href="" style={{textDecoration: "none"}} onClick={switchMode}>SignUp</a>
              </div>
              </form>
              ) : (
              <form id="forms" className="d-flex flex-column justify-content-end" onSubmit={onSubmit}>
                <div className="mb-3">
                <label htmlFor="floatingInput" id="email">email</label>
              <input type="email" name="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={handleChange } required/>
              
            </div>
            <div className="mb-3">
              <label htmlFor="floatingPassword" id="username">username</label>
              <input type="name" name="userName" className="form-control" id="floatingUsername" placeholder="username" onChange={handleChange} required/>
              
            </div>
            <div className="mb-3">
              <label htmlFor="floatingPassword" id="password">password</label>
              <input type="password" name="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={handleChange} required/>
              
            </div>
                      <div>

            </div>
            <input type="submit" className="btn block w-100 border-0 btn-primary mt-2 rounded-pill" value="SignUp" />
            <div className="d-inline-flex justify-content-end">
              <a href="" style={{textDecoration: "none"}} onClick={switchMode}>SignIn</a>
              </div>           
              </form>
              )}
              
         </div>
         
      </div>
      
      </div>
     
    </div>
  </div>
</div>
    </>
   
  );
};

export default Navbar;
