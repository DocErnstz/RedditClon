import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

import { createPost, updatePost } from "../../actions/posts";

const Form = () => {
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    subRedditName: ""
  });

  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const subs = useSelector((state) => state.subs);

  const clear = () => {
    setPostData({ title: "", message: "", subRedditName: "" });
  };
  
  const handleSubmit = async (e) => {
    console.log(postData);
     e.preventDefault();
   const id = subs.filter((sub) => sub.title === postData.subRedditName)[0]._id;
    dispatch(createPost({ ...postData, creator: user?.result?.name, subreddit: id }));
    clear();
  };
  const handleChange = (e) => {
    console.log(postData);
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };
 

  return (
    <div className="modal fade" id="createPostModal" style={{overflow: "hidden"}}   tabIndex="-1" aria-labelledby="createPostModalLabel" aria-hidden="true">
  <div className="modal-dialog mx-auto h-100 my-0 d-flex align-items-center" style={{maxWidth: "800px"}}>
    <div className="modal-content">
      <div className="d-flex">
        <div className="bg-primary" style={{flexBasis: "200px"}}>
          <div style={{height: "500px", width: "100%"}} id="imgForm"></div>
        </div>        
         <div className="d-flex flex-column flex-grow-1 p-3">
         <div className="d-flex justify-content-between">
           <h3 className="flex-grow-1" id="Title">CreatePost</h3>
                   <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <div className="d-flex h-100">
           <form id="forms" className="d-flex flex-column justify-content-end" onSubmit={handleSubmit}>
               <div className="mb-3">
                 <label htmlFor="floatingInput" id="title">Title</label>
                 <input type="text" name="title" className="form-control" id="floatingInput" placeholder="Title" onChange={handleChange} required/>
                </div>
              <div>
                <label htmlFor="floatingMessage" id="Message">Message</label>
                <input type="text" name="message" className="form-control" id="floatingMessage" placeholder="Description" onChange={handleChange} required />
              </div>
              
                {
                 (subs.length) ?  (<select class="form-select my-4" name="subRedditName" onChange={handleChange} aria-label="Default select example">{subs.map((sub) => ((subs.indexOf(sub) == 0) ? <option selected>{sub.title}</option> : <option >{sub.title}</option>))}</select>) : ""
                }
              <input type="submit" className="btn block w-100 border-0 btn-primary mt-2 rounded-pill" value="Post" /> 
              </form>
         </div>
      </div>
    </div>
  </div>
  </div>
</div>
  );
};

export default Form;
