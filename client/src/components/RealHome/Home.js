import React, { useState, useEffect } from "react";
import { getPosts } from "../../actions/posts";
import { useDispatch } from "react-redux";
import Form from "../Form/Form";

import SubCard from "./SubCard.js";
import { v4 as uuidv4 } from 'uuid';
import Posts from "../Posts/Posts";

const Homebar = () => {
  const [key, setKey] = useState("");
  const createPost = (e) => {
    e.preventDefault();
    console.log("asdas");
  }

  const dispatch = useDispatch();
   const [currentId, setCurrentId] = useState(0);
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  
  return (
    <div className="container" id="Mainbar" style={{overflowX: "hidden"}}>
      <Form />      
      <div className="row">
        <div id="homePosts" className="col-12 col-md-7">
           <div className="d-flex flex-column h-100">
             <div className="slice bg-white mb-4 rounded shadow">
               <div className="container h-100">
                 <div className="d-flex h-100 align-items-center">
                   <div className="d-flex justify-content-center" style={{"flexBasis": "50px"}}>
                    <i className="far fa-user fa-2x"></i>
                   </div>
                   <div className="flex-grow-1">
                     <input type="text" placeholder="Create Post" className="w-100 p-1 rounded"/>
                   </div>
                 </div>
               </div>
             </div>
              <Posts setCurrentId={setCurrentId} isMain={true}/>
            
           </div>
          </div>
         
        
         <div id="infoReddit" className="col-12 h-50 shadow col-md-4 mx-auto bg-white rounded">
        
            
           <div className="bg-white" style={{height: "250px"}}>
              
               <div className="h-100 p-3 container d-flex flex-column justify-content-between">
                 <p>
                   Your personal Reddit frontpage. Come here to check in with your favorite communities.
                 </p>
                 <button className="btn block border-0 w-100 border-primary btn-primary mt-2"  id="createPost" data-bs-toggle="modal" data-bs-target="#createPostModal">Create Post</button>
                 </div>
            
             
             </div>
             
           </div>
         </div>
      </div>
  );
};

export default Homebar;
